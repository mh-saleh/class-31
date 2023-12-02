const Container = ({ children, className }) => {
  return <div className={`w-[1170px] mx-auto ${className}`}>{children}</div>;
};

export default Container;
