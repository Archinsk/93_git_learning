import "./FlexboxCol.scss";

export const FlexboxCol = ({
  children,
  className,
  columns = 12,
  span,
  ...restProps
}) => {
  let componentClassName = span
    ? `flexbox-col-${span}-${columns}`
    : "flexbox-col";
  if (className) {
    componentClassName + ` ${className}`;
  }

  return (
    <div className={componentClassName} {...restProps}>
      {children}
    </div>
  );
};
