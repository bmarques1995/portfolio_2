"use client";
import React from "react";
import './style.css';

type CustomLabelProps<T> = {
  children: React.ReactNode;
  active: boolean;
  title: string;
  value: T;
  valueSetter: (val: T) => void;
};

export default function CustomLabel<T>({
  children,
  active,
  title,
  value,
  valueSetter,
}: Readonly<CustomLabelProps<T>>) {
  return (
    <label className="custom-label">
      <button onClick={() => valueSetter(value)}>
        {active && (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" fill="currentColor" />
          </svg>
        )}
      </button>
      {children}
      <span>{title}</span>
    </label>
  );
}