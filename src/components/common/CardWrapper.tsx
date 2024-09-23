const CardWrapper = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: string;
}) => {
  return <div className={`${styles}`}>{children}</div>;
};

export default CardWrapper;
