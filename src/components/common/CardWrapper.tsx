const CardWrapper = ({ children, styles }: CardWrapperProps) => {
  return <div className={`${styles}`}>{children}</div>;
};

export default CardWrapper;
