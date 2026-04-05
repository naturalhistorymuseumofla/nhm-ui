import React from 'react';
import { Meta } from '@storybook/react';
import Swatch from '../src/components/ColorSwatch';

// load tailwind config to read extended colors
const tw = require('../tailwind.config.js');
const colors =
  (tw && tw.theme && tw.theme.extend && tw.theme.extend.colors) || {};

function flatten(obj: any, prefix = ''): Array<[string, string]> {
  return Object.entries(obj || {}).flatMap(([k, v]) => {
    const key = prefix ? `${prefix}-${k}` : k;
    if (typeof v === 'string') return [[key, v]];
    if (typeof v === 'object') return flatten(v, key);
    return [];
  });
}

const entries = flatten(colors);

export default {
  title: 'Design/Colors',
} as Meta;

export const Palette = () => (
  <div style={{ padding: 16 }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 180px)',
        gap: 12,
      }}
    >
      {entries.map(([name, value]) => (
        <Swatch key={name} name={name} value={value} />
      ))}
    </div>
  </div>
);
