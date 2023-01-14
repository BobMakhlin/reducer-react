import { useCallback } from 'react';

export const ThemePicker = (props) => {
  const { onChange, themes } = props;

  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <select onChange={handleChange}>
      {themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
    </select>
  );
};
