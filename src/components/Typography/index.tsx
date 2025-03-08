import React from 'react';
import '../../styles/design-system/_typography.scss';
import '../../styles/design-system/_fonts.scss';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TextPreset1: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div className={`text-preset-1 ${className}`} style={style}>{children}</div>
);

export const TextPreset2: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div className={`text-preset-2 ${className}`} style={style}>{children}</div>
);

export const TextPreset3: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div className={`text-preset-3 ${className}`} style={style}>{children}</div>
);

export const TextPreset4: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div className={`text-preset-4 ${className}`} style={style}>{children}</div>
);

export const TextPreset4Bold: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div className={`text-preset-4-bold ${className}`} style={style}>{children}</div>
);

// Example usage:
// <TextPreset1>Large Bold Text</TextPreset1>
// <TextPreset2>Medium Bold Text</TextPreset2>
// <TextPreset3>Semi Bold Text</TextPreset3>
// <TextPreset4>Regular Text</TextPreset4>
// <TextPreset4Bold>Small Semi Bold Text</TextPreset4Bold> 