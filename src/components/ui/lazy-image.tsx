import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  blur?: boolean;
  placeholderHeight?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  fallback = "/placeholder.svg",
  blur = true,
  placeholderHeight = "200px",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ minHeight: placeholderHeight }}
    >
      {inView && (
        <img
          src={isError ? fallback : src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          className={cn(
            "transition-all duration-500 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0",
            blur && !isLoaded ? "blur-sm scale-105" : "scale-100",
            "w-full h-full object-cover"
          )}
          {...props}
        />
      )}
      {!isLoaded && inView && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-md" />
      )}
      {!inView && (
        <div
          className="w-full bg-muted/50 rounded-md animate-pulse"
          style={{ height: placeholderHeight }}
        />
      )}
    </div>
  );
};

LazyImage.displayName = "LazyImage";
