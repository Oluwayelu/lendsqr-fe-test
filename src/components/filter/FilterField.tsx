import { FC } from "react";

import { InputField, SelectField } from "components";

type Props = {
  label: string;
  value: string;
  name: string;
  setFieldValue: (field: string, value: string) => void;
};

type ConditionalProps =
  | {
      type?: "select";
      options: string[];
    }
  | {
      type?: "text" | "password" | "email" | "date";
      options?: never;
    };

const FilterField: FC<Props & ConditionalProps> = ({
  type,
  label,
  value,
  name,
  setFieldValue,
  options,
}) => {
  return (
    <div className="filter-field">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <SelectField
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
            setFieldValue(name, event.target.value);
          }}
          id={name}
          options={options}
        />
      ) : (
        <InputField
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setFieldValue(name, event.target.value);
          }}
          type={type}
          label={label}
          size="small"
          id={name}
        />
      )}
    </div>
  );
};

export default FilterField;
