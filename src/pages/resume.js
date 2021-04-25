import * as React from "react";
import tw, { styled } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

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
import PrintButton from "../components/resume/PrintButton";

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
    size: A4 portrait;
    html {
      // font-size: 15px;
      margin: 0;
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
    ${tw`flex-1 flex items-center justify-center relative border-t w-full`}
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <Helmet title="plj / resume" defer={false} />
    <PrintButton />
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
        <div css={tw`mt-12`}>Blank Space - Taylor Swift</div>
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
