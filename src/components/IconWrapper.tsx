import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
}

// Using a more compatible approach with TypeScript
const IconWrapper = ({ icon, className }: IconWrapperProps) => {
  // We have to bypass TypeScript's type checking for react-icons
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - IconType is compatible with JSX but TypeScript doesn't recognize it
  return React.createElement(icon, { className });
};

export default IconWrapper; 