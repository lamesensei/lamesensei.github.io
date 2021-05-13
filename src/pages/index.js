import * as React from "react";
import tw from "twin.macro";
import { Helmet } from "react-helmet";

import Layout from "./../components/Layout";

const Container = tw.div`container mx-auto font-mono flex justify-center items-center h-screen`;

const App = () => (
  <Layout>
    <Helmet title="plj" defer={false} />
    <Container>
      <a href="/resume">Resume/CV</a>
    </Container>
  </Layout>
);

export default App;
