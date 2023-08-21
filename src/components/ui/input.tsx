import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="lg:flex rounded-lg border-2 border-gray-300 bg-gray-200 bg-opacity-50 p-3 text-5xl font-bold outline-offset-2 focus:border-transparent focus:border-0 font-black text-black shadow-md opacity-50 min-w-[400px]"
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
