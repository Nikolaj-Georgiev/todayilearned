export function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
