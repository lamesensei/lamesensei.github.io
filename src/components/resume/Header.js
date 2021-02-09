import * as React from "react";
import tw, { css, styled } from "twin.macro";

const headerStyles = css`
  grid-area: header;
`;
const HeaderSection = ({ children }) => (
  <section
    tw="p-4 text-left sm:border-b sm:text-right flex flex-col justify-end"
    css={headerStyles}
  >
    {children}
  </section>
);
// const HeaderSection = tw.section`p-4 text-left sm:border-b sm:text-right flex flex-col justify-end`;
const NameSection = tw.h1`font-sans font-semibold text-gray-800 text-4xl`;
const FirstName = styled.span`
  ${tw`underline`}
  font-size:inherit
`;
const LastName = styled.span`
  font-size: inherit;
`;
const Title = tw.h2`font-mono text-gray-600`;

const Header = ({ firstName, lastName, title }) => (
  <HeaderSection id="header">
    <NameSection>
      <FirstName>{firstName}</FirstName> <LastName>{lastName}</LastName>
    </NameSection>
    <Title>{title}</Title>
  </HeaderSection>
);

export default Header;
