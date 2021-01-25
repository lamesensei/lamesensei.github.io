import * as React from "react";
import tw, { css } from "twin.macro";
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
const Grid = tw.div`container mx-auto grid grid-cols-1 sm:grid-cols-8 auto-rows-min p-4`;

const Resume = ({ data }) => (
  <Layout>
    <Grid>
      <Header
        firstName={resumeData.first_name}
        lastName={resumeData.last_name}
        title={resumeData.title}
      ></Header>
      <Contact
        sectionHeader="Contact"
        email={resumeData.email}
        phone={resumeData.phone}
        github={resumeData.github}
      ></Contact>
      <Skills sectionHeader="Skills" skills={resumeData.skills}></Skills>
      <About sectionHeader="About" about={resumeData.about}></About>
      <Experience
        sectionHeader="Experience"
        experiences={resumeData.experiences}
      ></Experience>
      <Education
        sectionHeader="Education"
        education={resumeData.education}
      ></Education>
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
