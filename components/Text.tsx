import { PropsWithChildren } from "react";

export const Text = ({ children }: PropsWithChildren): JSX.Element => (
  <p className="text-sm text-gray-700">{children}</p>
);
