import * as React from "react";
import tw, { styled } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const SkillsSection = styled.section`
  ${tw`p-4 border-b`}
  grid-area: skills;
`;

const SkillsList = tw.ul`flex flex-wrap`;
const SkillItem = tw.div`block font-mono bg-gray-100 border-gray-200 border rounded px-2 py-1 mr-2 mb-2`;
const SkillContent = tw.span`text-sm`;

const SubHeader = tw.h6`font-semibold text-gray-600 mb-1`;

const Skills = ({ sectionHeader, skills }) => {
  const listItems = Object.entries(skills).map(([key, value]) => {
    const skills = value.map((skill) => (
      <SkillItem>
        <SkillContent>{skill}</SkillContent>
      </SkillItem>
    ));
    return (
      <>
        <SubHeader>{key}</SubHeader>
        <SkillsList>{skills}</SkillsList>
      </>
    );
  });
  return (
    <SkillsSection>
      <SectionHeader>{sectionHeader}</SectionHeader>
      {listItems}
    </SkillsSection>
  );
};
export default Skills;
