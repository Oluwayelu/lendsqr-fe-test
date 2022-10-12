import { FC } from "react";
type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  options: string[];
};

const Select: FC<Props> = ({ value, id, onChange, options }) => {
  return (
    <div className="select-field">
      <select value={value} onChange={onChange} id={id}>
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
