import React, { useEffect } from "react";
import Select from "react-select";
import { ROLES } from "../../data/roles";
import { useDispatch, useSelector } from "react-redux";
import { setRefresh } from "../../redux/reducers/commons";

const SelectGroup = ({
  label,
  name,
  disabled,
  errors,
  action,
  required,
  defaultValue,
  options,
  className,
  isMulti,
  loading,
  mode,
}) => {
  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>

      <div className="relative">
        <Select
          options={options}
          name={name}
          isClearable={true}
          isDisabled={disabled}
          onChange={action}
          defaultValue={defaultValue}
          isLoading={!defaultValue.length ? true : false}
          isMulti={isMulti}
          className={
            className
              ? className
              : `relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`
          }
        />
      </div>
      {errors && <div className="text-sm text-red">{errors}</div>}
    </div>
  );
};

export default SelectGroup;
