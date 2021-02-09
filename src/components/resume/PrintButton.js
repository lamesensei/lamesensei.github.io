import { faWindows } from "@fortawesome/free-brands-svg-icons";
import * as React from "react";
import tw, { styled } from "twin.macro";

const StyledButton = styled.button`
  ${tw`fixed px-2 py-1 border rounded bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-800`}
  right: 1rem;
  top: 1rem;
  @media print {
    display: none;
  }
`;

const PrintButton = () => {
  const print = () => window.print();
  return <StyledButton onClick={print}>Print Me!</StyledButton>;
};

export default PrintButton;
