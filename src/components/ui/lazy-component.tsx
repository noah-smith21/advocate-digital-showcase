import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  height?: string;
  className?: string;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback,
  height = "200px",
  className,
}) => {
  const defaultFallback = (
    <div
      className={cn("space-y-4 p-4", className)}
      style={{ minHeight: height }}
    >
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex space-x-2 mt-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
};

LazyComponent.displayName = "LazyComponent";
