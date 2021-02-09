import * as React from "react";
import tw, { css } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const educationStyles = css`
  grid-area: education;
`;
const EducationSection = ({ children }) => (
  <section tw="p-4 sm:text-right sm:border-t" css={educationStyles}>
    {children}
  </section>
);

// const EducationSection = tw.section`p-4 sm:text-right sm:border-t`;
const EducationItem = tw.div`mb-1`;
const School = tw.h5`font-sans font-semibold text-gray-800`;
const Title = tw.h6`font-sans text-gray-600`;

const Education = ({ sectionHeader, education }) => {
  const educationItems = education.map((item) => (
    <EducationItem>
      <School>{item.school}</School>
      <Title>{item.title}</Title>
    </EducationItem>
  ));
  return (
    <EducationSection id="education">
      <SectionHeader>{sectionHeader}</SectionHeader>
      {educationItems}
    </EducationSection>
  );
};
export default Education;
