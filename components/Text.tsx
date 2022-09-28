import { ReactNode } from "react";

type TextProps = {
  children?: ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps): JSX.Element => (
  <p className={className ? className : "text-sm text-gray-700"}>{children}</p>
);
