import React from 'react';
import getLocalImagePath from '../utils/imageUtils';

interface LocalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * A component that renders an image from a local path if available, otherwise uses the remote URL
 */
const LocalImage: React.FC<LocalImageProps> = ({ src, alt, className, ...props }) => {
  const localSrc = getLocalImagePath(src);
  
  return (
    <img 
      src={localSrc} 
      alt={alt || 'Image'} 
      className={className}
      {...props}
    />
  );
};

export default LocalImage;
