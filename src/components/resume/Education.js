import * as React from "react";
import tw, { styled } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const EducationSection = styled.section`
  ${tw`p-4 border-b`}
  grid-area: education;
  @media print {
    ${tw`border-b-0`}
  }
`;

const EducationItem = tw.div`mb-1 sm:text-gray-300`;
const School = tw.h5`font-sans font-semibold text-gray-800`;
const SchoolItem = tw.span`mr-1 inline-block`;
const Title = tw.h6`font-sans text-gray-600`;

const Education = ({ sectionHeader, education }) => {
  const educationItems = education.map((item) => (
    <EducationItem>
      <School>
        <SchoolItem>{item.school}</SchoolItem>{" "}
        <SchoolItem>({item.date})</SchoolItem>
      </School>
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
