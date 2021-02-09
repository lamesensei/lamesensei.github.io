import * as React from "react";
import tw, { css } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SectionHeader } from "./SharedComponents";

const experienceStyles = css`
  grid-area: experience;
`;
const ExperienceSection = ({ children }) => (
  <section tw="p-4 sm:pr-8 sm:border-l" css={experienceStyles}>
    {children}
  </section>
);

// const ExperienceSection = tw.section`p-4 sm:pr-8 sm:border-l`;
const ExperienceItem = tw.div`border p-4 rounded-sm not-first:mt-4 bg-gray-50`;
const Title = tw.h5`font-semibold tracking-wide text-gray-800 text-lg mr-2`;
const DateString = tw.span`block sm:inline text-sm font-mono text-gray-600`;
const Company = tw.h6`font-medium text-gray-600`;
const Description = tw.div`text-sm hidden sm:block font-mono mb-2 bg-gray-200 p-2 rounded-sm`;
const ResponsibilitiesList = tw.ul`list-disc list-inside`;
const ResponsibilitiesListItem = tw.li`text-gray-800`;
// const SkillsTags = tw.div``;
// const TagItem = tw.span``;

const Experience = ({ sectionHeader, experiences }) => {
  const experiencesMap = experiences.map((item) => {
    const responsibilities = item.responsibilities.map((value) => (
      <ResponsibilitiesListItem>{value}</ResponsibilitiesListItem>
    ));
    return (
      <ExperienceItem>
        <Title>
          {item.title}
          {"  "}
          <DateString>{item.date_string}</DateString>
        </Title>
        <Company>{item.company}</Company>
        {item.description ? (
          <Description>
            <FontAwesomeIcon icon={"lightbulb"} fixedWidth></FontAwesomeIcon>
            {item.description}
          </Description>
        ) : null}
        <ResponsibilitiesList>{responsibilities}</ResponsibilitiesList>
      </ExperienceItem>
    );
  });
  return (
    <ExperienceSection id="experience">
      <SectionHeader>{sectionHeader}</SectionHeader>
      {experiencesMap}
    </ExperienceSection>
  );
};

export default Experience;
