import React, { useState } from 'react';

interface TechIconProps {
  src?: string;
  label: string;
  className?: string;
  size?: number;
}

/**
 * Tech logo with letter fallback when the image fails to load.
 */
const TechIcon: React.FC<TechIconProps> = ({
  src,
  label,
  className = '',
  size = 18,
}) => {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <span
        className={`skill-chip-fallback ${className}`.trim()}
        style={{ width: size, height: size, fontSize: Math.max(9, size * 0.45) }}
        aria-hidden="true"
      >
        {label.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={`skill-chip-icon ${className}`.trim()}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};

export default TechIcon;
