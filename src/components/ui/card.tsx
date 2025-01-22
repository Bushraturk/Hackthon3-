import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow custom styling
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string; // Allow custom styling
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={clsx("bg-white shadow-lg rounded-lg", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={clsx("p-4", className)}>
    {children}
  </div>
);
