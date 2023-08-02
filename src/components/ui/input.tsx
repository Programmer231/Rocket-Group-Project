import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        style={{
          display: "flex",
          width: "100%",
          borderRadius: "0.375rem",
          border: "1px solid #E5E7EB",
          background: "rgba(200, 200, 200, 0.5)",
          padding: "0.75rem 0.5rem",
          fontSize: "5rem",
          outlineOffset: "2px",
          borderColor: "transparent",
          borderWidth: "0",
          fontWeight: "bold",
          color: "black",
          boxShadow: "0 0 0 2px white, 0 0 0 4px #E5E7EB",
          opacity: "0.5",
          minWidth: "400px",
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
