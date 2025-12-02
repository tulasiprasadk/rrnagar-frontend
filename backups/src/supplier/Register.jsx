import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Minimal Register component for suppliers.
 * - Uses `res` (response) instead of leaving it unused.
 * - If you don't need the response, you can `await` the call without assignment.
 */
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function updateField(key) {
    return (e) => setForm((s) => ({ ...s, [key]: e.target.value }));
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const resp = await fetch('/api/supplier/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const res = await resp.json(); // res is used below
      if (!resp.ok) {
        setError(res?.message || 'Registration failed');
        return;
      }

      // Example: registration successful — redirect to login or dashboard
      navigate('/supplier/login');
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred while registering.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Supplier Register</h1>
      <form onSubmit={handleRegister} style={{ maxWidth: 420 }}>
        <div>
          <label>
            Name
            <input value={form.name} onChange={updateField('name')} required />
          </label>
        </div>

        <div style={{ marginTop: 8 }}>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={updateField('email')}
              required
            />
          </label>
        </div>

        <div style={{ marginTop: 8 }}>
          <label>
            Password
            <input
              type="password"
              value={form.password}
              onChange={updateField('password')}
              required
            />
          </label>
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering…' : 'Register'}
          </button>
        </div>

        {error && <div style={{ color: 'crimson', marginTop: 12 }}>{error}</div>}
      </form>
    </main>
  );
}