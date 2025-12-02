import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      marginTop: 'auto'
    }}>
      <small style={{ color: 'rgba(0,0,0,0.6)' }}>© ' + (new Date()).getFullYear() + ' rrnagar-frontend</small>
    </footer>
  );
}
