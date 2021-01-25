import * as React from "react";
import tw from "twin.macro";

import { SectionHeader } from "./SectionHeader";

const AboutSection = tw.section`p-4 sm:border-b sm:border-l row-start-3 sm:row-start-1 sm:col-start-4 sm:col-end-8`;
const AboutParagraph = tw.p`font-sans text-gray-600`;

const About = ({ sectionHeader, about }) => (
  <AboutSection>
    <SectionHeader>{sectionHeader}</SectionHeader>
    <AboutParagraph>{about}</AboutParagraph>
  </AboutSection>
);

export default About;
