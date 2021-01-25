import * as React from "react";
import tw from "twin.macro";

import { SectionHeader } from "./SectionHeader";

const EducationSection = tw.section`p-4 row-start-5 sm:row-start-auto sm:text-right sm:col-start-2 sm:col-end-4 sm:border-t`;
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
    <EducationSection>
      <SectionHeader>{sectionHeader}</SectionHeader>
      {educationItems}
    </EducationSection>
  );
};
export default Education;
