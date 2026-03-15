"use client";

import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from 'next-themes';

const data = [
  { name: 'Jun 24', value: 1100000 },
  { name: 'Jun 25', value: 1120400 },
  { name: 'Jun 26', value: 1080000 },
  { name: 'Jun 27', value: 1150000 },
  { name: 'Jun 28', value: 1210000 },
  { name: 'Jun 29', value: 1190000 },
  { name: 'Jun 30', value: 1245230 },
];

export function PortfolioChart() {
  const { theme } = useTheme();

  // Next-themes takes a moment to mount and detect theme on first render
  // We use dark mode variables as a fallback for SSR consistency
  const colors = useMemo(() => {
    const isDark = theme === 'dark';
    return {
      stroke: isDark ? '#ffffff' : '#09090b',
      fillStart: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(9, 9, 11, 0.2)',
      fillEnd: isDark ? 'rgba(255, 255, 255, 0.0)' : 'rgba(9, 9, 11, 0.0)',
      gridLine: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(9, 9, 11, 0.1)',
      text: isDark ? '#a1a1aa' : '#71717a',
    };
  }, [theme]);

  // Handle number formatting (e.g., 1200000 -> 1.2M)
  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return '0';
    return `₹${(tickItem / 100000).toFixed(1)}L`;
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.3} />
              <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: colors.text, fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: colors.text, fontSize: 12 }}
            tickFormatter={formatYAxis}
            width={60}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              border: `1px solid ${colors.gridLine}`,
              backgroundColor: theme === 'dark' ? '#0a0a0c' : '#ffffff',
              color: theme === 'dark' ? '#ffffff' : '#09090b',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            itemStyle={{ color: theme === 'dark' ? '#ffffff' : '#09090b' }}
            formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Portfolio Value']}
            labelStyle={{ color: colors.text, marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={colors.stroke} 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
