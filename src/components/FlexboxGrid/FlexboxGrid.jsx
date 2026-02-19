import "./FlexboxGrid.scss";

export const FlexboxGrid = ({ children, className, ...restProps }) => {
  return (
    <div
      className={className ? `flexbox-grid ${className}` : "flexbox-grid"}
      {...restProps}
    >
      {children}
    </div>
  );
};
