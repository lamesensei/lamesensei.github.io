import * as React from "react";
import tw from "twin.macro";

import { SectionHeader } from "./SectionHeader";

const SkillsSection = tw.section`p-4 text-left sm:text-right sm:col-start-2 sm:col-end-4 sm:border-t`;
const SkillsList = tw.ul`flex flex-wrap sm:justify-end`;
const SkillItem = tw.li`block text-gray-600 mr-1`;

const SubHeader = tw.h6`font-semibold text-gray-800`;

const Skills = ({ sectionHeader, skills }) => {
  const listItems = Object.entries(skills).map(([key, value]) => {
    const skills = value.map((skill) => <SkillItem>{skill}</SkillItem>);
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
