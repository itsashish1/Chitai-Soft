import React from 'react';

export default function Toast({ toast }) {
  if (!toast || !toast.show) return null;

  return (
    <div className={`toast-notification ${toast.type} ${toast.show ? 'show' : ''}`}>
      <span style={{
        fontWeight: 700,
        fontSize: '1.1rem',
        color: toast.type === 'success' ? '#22c55e' : '#ef4444'
      }}>
        {toast.type === 'success' ? '✓' : '⚠'}
      </span>
      <span>{toast.message}</span>
    </div>
  );
}
