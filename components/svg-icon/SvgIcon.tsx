import * as React from 'react';

const style: React.CSSProperties = {
  width: '20px',
  display: 'flex',
};

export function SvgIcon({ icon }: { icon: React.ReactElement }) {
  return <div style={style}>{icon}</div>;
}
