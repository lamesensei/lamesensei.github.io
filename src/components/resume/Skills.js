import * as React from "react";
import tw, { css } from "twin.macro";

import { SectionHeader } from "./SharedComponents";

const skillStyles = css`
  grid-area: skills;
`;
const SkillsSection = ({ children }) => (
  <section tw="p-4 text-left sm:text-right sm:border-t" css={skillStyles}>
    {children}
  </section>
);

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
