import * as React from "react";
import tw, { css, styled } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import { graphql } from "gatsby";
// import Img from "gatsby-image";

//data
import resumeData from "../data/resume.json";

//components
import Layout from "../components/Layout";
import Contact from "../components/resume/Contact";
import Skills from "../components/resume/Skills";
import About from "../components/resume/About";
import Header from "../components/resume/Header";
import Experience from "../components/resume/Experience";
import Education from "../components/resume/Education";

// layout
const Grid = styled.div`
  ${tw`p-4 mx-auto`}

  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: min-content max-content auto;
  grid-template-areas:
    "header about"
    "contact experience"
    "skills experience"
    "education experience"
    ". experience";

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "contact"
      "about"
      "skills"
      "education"
      "experience";
  }

  @media print {
    padding: 0;
  }
`;

const PrintStyle = createGlobalStyle`
@media print {
  html {
    margin: 0;
    font-size: 13px;
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <PrintStyle />
    <Grid>
      <Header
        firstName={resumeData.first_name}
        lastName={resumeData.last_name}
        title={resumeData.title}
      ></Header>
      <About sectionHeader="About" about={resumeData.about}></About>
      <Contact
        sectionHeader="Contact"
        email={resumeData.email}
        phone={resumeData.phone}
        github={resumeData.github}
      ></Contact>
      <Skills sectionHeader="Skills" skills={resumeData.skills}></Skills>
      <Education
        sectionHeader="Education"
        education={resumeData.education}
      ></Education>

      <Experience
        sectionHeader="Experience"
        experiences={resumeData.experiences}
      ></Experience>
    </Grid>
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
