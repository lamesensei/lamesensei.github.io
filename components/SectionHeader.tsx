import { PropsWithChildren } from "react";

export const SectionHeader = ({ children }: PropsWithChildren): JSX.Element => (
  <h2 className="font-medium text-lg">{children}</h2>
);
