import { useState } from "react";

import type { FC } from "react";

type Props = {
  placeholder?: string;
  label?: string;
  value?: string;
  id?: string;
  type?: "text" | "password" | "email" | "date";
  size: "small" | "large";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  required?: boolean;
  className?: string;
};

const Input: FC<Props> = ({
  placeholder,
  label,
  value,
  type,
  size,
  id,
  minLength,
  required,
  onChange,
  className,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const togglePassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  const handleDateInputOnFocus = (
    event: React.ChangeEvent<HTMLInputElement>
  ): unknown => {
    if (type === "date") {
      return (event.target.type = "date");
    } else {
      return null;
    }
  };

  const handleDateInputOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ): unknown => {
    if (type === "date") {
      return (event.target.type = "text");
    } else {
      return null;
    }
  };
  return (
    <div className={`${className && className} input-field`}>
      <input
        className={`${size === "small" && "small"} ${
          size === "large" && "large"
        }`}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : label}
        type={type === undefined ? "text" : isShowPassword ? "text" : type}
        onFocus={handleDateInputOnFocus}
        onBlur={handleDateInputOnBlur}
        minLength={minLength}
        required={required}
      />
      {type === "password" && (
        <button
          className="show-password"
          type="button"
          onClick={togglePassword}
        >
          {isShowPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default Input;
