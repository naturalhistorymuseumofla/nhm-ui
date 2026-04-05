import React from 'react';

export const Swatch: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div
      style={{
        width: 160,
        padding: 12,
        borderRadius: 6,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0,0,0,.06)',
      }}
    >
      <div style={{ height: 64, background: value, borderRadius: 6 }} />
      <div style={{ marginTop: 8, fontSize: 12 }}>
        <div>{name}</div>
        <div style={{ color: '#555' }}>{value}</div>
      </div>
    </div>
  );
};

export default Swatch;
