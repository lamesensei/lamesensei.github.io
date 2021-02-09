import * as React from "react";
import tw, { styled } from "twin.macro";
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

  max-width: 950px;
  display: grid;
  grid-template-columns: 3fr 7fr;
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
    width: 950px;
    padding: 0;
  }
`;

const PrintStyle = createGlobalStyle`
  @media only screen and (max-width: 768px){
    html {
      font-size: 13px;
    }
  }
  @media print {
    size: A4;
    layout: landscape;
    html {
      // font-size: 15px;
      margin: 0;
    }

    #grid: {
      width: 1000px;
    }
  }

  @page {
    margin: 1rem;
  }
`;

const BigFlex = styled.div`
  ${tw`flex flex-col items-center`}
`;

const PrintJoke = styled.div`
  ${tw`hidden`}
  @media print {
    ${tw`flex-1 flex items-center justify-center border-t w-full pt-16`}
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <PrintStyle />
    <BigFlex>
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
      <PrintJoke>
        "This space intentionally left blank" ~{" "}
        <span css={tw``}>Taylor Swift</span>
      </PrintJoke>
    </BigFlex>
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
