export function Button({
  children,
  onClick,
  className = '',
  label,
  style = {},
  disabled = false,
}) {
  return (
    <button
      className={`btn ${className}`}
      aria-label={label}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
