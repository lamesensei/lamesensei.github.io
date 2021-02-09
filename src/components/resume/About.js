import * as React from "react";
import tw, { css } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const aboutStyles = css`
  grid-area: about;
`;
const AboutSection = ({ children }) => (
  <section tw="p-4 sm:pr-8 sm:border-b sm:border-l" css={aboutStyles}>
    {children}
  </section>
);

// const AboutSection = tw.section`p-4 sm:pr-8 sm:border-b sm:border-l`;
const AboutParagraph = tw.p`font-sans text-gray-600`;

const About = ({ sectionHeader, about }) => (
  <AboutSection id="about">
    <SectionHeader>{sectionHeader}</SectionHeader>
    <AboutParagraph>{about}</AboutParagraph>
  </AboutSection>
);

export default About;
