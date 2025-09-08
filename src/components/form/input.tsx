import type { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "tel";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: string;
  inputClass?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  disabled,
  placeholder,
  label,
  value,
  onChange,
  error,
  inputClass,
  icon,
  ...props
}) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClass}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 ml-3 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
