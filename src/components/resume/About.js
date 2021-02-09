import * as React from "react";
import tw, { styled } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const AboutSection = styled.section`
  ${tw`p-4 border-b sm:border-l`}
  grid-area: about;

  @media print {
    ${tw`border-l`}
  }
`;

// const AboutSection = tw.section`p-4 sm:pr-8 sm:border-b sm:border-l`;
const AboutParagraph = tw.p`font-sans text-gray-600`;

const About = ({ sectionHeader, about }) => (
  <AboutSection>
    <SectionHeader>{sectionHeader}</SectionHeader>
    <AboutParagraph>{about}</AboutParagraph>
  </AboutSection>
);

export default About;
