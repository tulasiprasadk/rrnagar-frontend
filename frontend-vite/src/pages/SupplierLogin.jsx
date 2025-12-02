import React, { useEffect, useState } from 'react';

/**
 * Minimal Supplier Dashboard component.
 * - Shows KYC status (avoids unused variable).
 * - Replace fetch/KYC logic with your real API as needed.
 */
export default function SupplierDashboard() {
  const [kycCompleted, setKycCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchKycStatus() {
      try {
        // Example: replace with your real API call
        const resp = await fetch('/api/supplier/kyc-status');
        if (!resp.ok) {
          // handle non-200
          if (mounted) setKycCompleted(false);
        } else {
          const data = await resp.json();
          if (mounted) setKycCompleted(Boolean(data?.kycCompleted));
        }
      } catch (err) {
        // log the error so the catch is not empty
        console.error('Failed to fetch KYC status:', err);
        if (mounted) setKycCompleted(false);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchKycStatus();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Supplier Dashboard</h1>
      {loading ? (
        <p>Loading status…</p>
      ) : (
        <div>
          <p>KYC Completed: {kycCompleted ? 'Yes' : 'No'}</p>
          {kycCompleted ? (
            <p>Thank you — your KYC is complete.</p>
          ) : (
            <p>Please complete your KYC to access all features.</p>
          )}
        </div>
      )}
    </main>
  );
}