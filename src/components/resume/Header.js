import * as React from "react";
import tw, { styled } from "twin.macro";

const HeaderSection = styled.section`
  ${tw`p-4 flex flex-col justify-end border-b`}
  grid-area: header;
`;

const NameSection = tw.h1`font-display font-semibold text-gray-800 text-5xl`;
const FirstName = styled.span`
  ${tw`underline`}
  font-size:inherit
`;
const LastName = styled.span`
  ${tw``}
  font-size: inherit;
`;
const Title = tw.h2`font-mono text-gray-600`;

const Header = ({ firstName, lastName, title }) => (
  <HeaderSection>
    <NameSection>
      <FirstName>{firstName}</FirstName> <LastName>{lastName}</LastName>
    </NameSection>
    <Title>{title}</Title>
  </HeaderSection>
);

export default Header;
