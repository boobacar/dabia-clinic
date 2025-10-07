import React, { useState } from "react";

/**
 * SkeletonImage
 * A lightweight wrapper to show a shimmering skeleton while the image loads.
 *
 * Props:
 * - src, alt: forwarded to <img>
 * - className: size/container classes (e.g., w-full h-48)
 * - imgClassName: classes applied directly to <img>
 * - skeletonClassName: optional to tweak skeleton shape (e.g., rounded-full)
 * - ...imgProps: any other props for <img> (loading, decoding, etc.)
 */
export default function SkeletonImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  skeletonClassName = "",
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} aria-busy={!loaded}>
      {!loaded && (
        <div className={`absolute inset-0 skeleton ${skeletonClassName}`} />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${imgClassName} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        {...imgProps}
      />
    </div>
  );
}

