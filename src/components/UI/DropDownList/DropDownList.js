import { useCallback } from "react";

export const DropDownList = (props) => {
  const { onChange, items, selectedItem } = props;

  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <select value={selectedItem} onChange={handleChange}>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
