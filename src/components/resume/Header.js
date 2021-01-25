import * as React from "react";
import tw from "twin.macro";

const HeaderSection = tw.section`p-4 text-left sm:border-b sm:text-right sm:col-start-2 sm:col-end-4 flex flex-col justify-end`;
const NameSection = tw.h1`font-sans font-semibold text-gray-800 text-4xl`;
const FirstName = tw.span`underline`;
const LastName = tw.span``;
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
