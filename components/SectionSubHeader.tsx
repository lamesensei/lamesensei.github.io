import { PropsWithChildren } from "react";

export const SectionSubHeader = ({ children }: PropsWithChildren): JSX.Element => (
  <h3 className="text-sm text-gray-700">{children}</h3>
);
