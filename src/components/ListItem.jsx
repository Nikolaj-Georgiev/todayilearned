export function ListItem({
  children,
  className = '',
  style = {},
  onClick = null,
}) {
  return (
    <li
      className={`list-item ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
