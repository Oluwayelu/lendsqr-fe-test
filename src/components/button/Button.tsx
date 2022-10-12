import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button className={`${className} btn`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
