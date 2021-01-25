import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";

import resumeData from "../data/resume.json";

const MainContainer = tw.div`container mx-auto p-4 font-mono flex-col flex justify-start`;

const Header = tw.section`flex flex-wrap items-end mb-4 p-4 border rounded-sm`;
const NameSection = tw.div`flex flex-col`;
const FullName = tw.div`flex text-3xl font-sans font-semibold mr-4 text-gray-700 leading-none`;
const FirstName = tw.h1`mr-2`;
const LastName = tw.h1``;
const Title = tw.span`text-gray-500`;
const Avatar = tw(Img)`hidden sm:block h-20 w-20 rounded mr-4`;
const ContactSection = tw.div`flex flex-col pt-2 sm:pt-0 sm:flex-row`;
const ContactLink = tw.a`text-light-blue-600`;
const LinkDivider = tw.span`mx-2 text-gray-500 hidden md:block`;

const Section = tw.section`p-4 mb-4 border rounded-sm`;
const SectionHeader = tw.h3`text-xl mb-2`;
const SectionContent = tw.div`text-gray-500`;

const Resume = ({ data }) => (
  <Layout>
    <MainContainer>
      <Header>
        <Avatar fluid={data.avatar.childImageSharp.fluid}></Avatar>
        <NameSection>
          <FullName>
            <FirstName>{resumeData.first_name}</FirstName>
            <LastName>{resumeData.last_name}</LastName>
          </FullName>

          <Title>{resumeData.title}</Title>
          <ContactSection>
            <ContactLink href={resumeData.phone.href} target="_blank">
              {resumeData.phone.text}
            </ContactLink>
            <LinkDivider>/</LinkDivider>
            <ContactLink href={resumeData.email.href} target="_blank">
              {resumeData.email.text}
            </ContactLink>
            <LinkDivider>/</LinkDivider>
            <ContactLink href={resumeData.github.href} target="_blank">
              {resumeData.github.text}
            </ContactLink>
          </ContactSection>
        </NameSection>
      </Header>
      <Section>
        <SectionHeader>About</SectionHeader>
        <SectionContent>{resumeData.about}</SectionContent>
      </Section>
      <Section>
        <SectionHeader>Skills</SectionHeader>
        <SectionContent>I like solving problems</SectionContent>
      </Section>
      <Section>
        <SectionHeader>Experience</SectionHeader>
        <SectionContent>I like solving problems</SectionContent>
      </Section>
      <Section>
        <SectionHeader>Education</SectionHeader>
        <SectionContent>I like solving problems</SectionContent>
      </Section>
    </MainContainer>
  </Layout>
);

export default Resume;

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
