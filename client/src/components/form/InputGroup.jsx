import React from "react";

const InputGroup = ({
  label,
  name,
  type,
  placeholder,
  icon,
  action,
  errors,
  required,
  defaultValue,
  className,
  prependIcon,
  disabled
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          {label} {required && <span className="text-meta-1">*</span>}
        </label>
      )}

      <div className="relative">
        {prependIcon && icon && (
          <span className="absolute right-4 top-4">{icon}</span>
        )}
        <input
          disabled={disabled}
          name={name}
          type={type}
          placeholder={placeholder}
          className={
            className
              ? className
              : `w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`
          }
          onChange={action}
          value={defaultValue}
        />

        {!prependIcon && icon && (
          <span className="absolute right-4 top-4">{icon}</span>
        )}
      </div>
      {errors && <div className="text-sm text-red">{errors}</div>}
    </div>
  );
};

export default InputGroup;
