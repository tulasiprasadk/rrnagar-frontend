import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * RequireAuth wrapper:
 * - Checks for a token, optionally verifies it with an API.
 * - If not authenticated, redirects to /supplier/login.
 * - All catch blocks log the error (non-empty).
 *
 * Usage:
 * <RequireAuth>
 *   <YourProtectedComponent />
 * </RequireAuth>
 */
export default function RequireAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function verify() {
      try {
        const token = localStorage.getItem('supplier_token');
        if (!token) {
          if (mounted) setAuthenticated(false);
          return;
        }

        // Optionally verify token with backend
        const resp = await fetch('/api/supplier/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });

        if (!resp.ok) {
          if (mounted) setAuthenticated(false);
          return;
        }

        const data = await resp.json();
        if (mounted) setAuthenticated(Boolean(data?.valid));
      } catch (err) {
        console.error('Error verifying supplier token:', err);
        if (mounted) setAuthenticated(false);
      } finally {
        if (mounted) setChecking(false);
      }
    }

    verify();

    return () => {
      mounted = false;
    };
  }, [navigate, location]);

  if (checking) {
    return <div style={{ padding: 20 }}>Checking authentication…</div>;
  }

  if (!authenticated) {
    // preserve the current location for post-login redirect
    navigate('/supplier/login', { state: { from: location }, replace: true });
    return null;
  }

  return <>{children}</>;
}