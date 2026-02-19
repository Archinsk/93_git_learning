import "./Tile.scss";

export const Tile = ({ children, className, ...restProps }) => {
  return (
    <div className={className ? `tile ${className}` : "tile"} {...restProps}>
      {children}
    </div>
  );
};
