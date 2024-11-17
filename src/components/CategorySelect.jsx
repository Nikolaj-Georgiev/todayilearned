import { CATEGORIES } from '../data/config';

export function CategorySelect({ name, value, onChange, disabled }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value=''>Choose category:</option>
      {CATEGORIES.map((cat) => (
        <option
          key={cat.name}
          value={cat.name}
        >
          {cat.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
