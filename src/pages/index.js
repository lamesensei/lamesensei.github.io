import * as React from "react";
import tw from "twin.macro";

import Layout from "./../components/Layout";

const Container = tw.div`container mx-auto font-mono flex justify-center items-center h-screen`;

const App = () => (
  <Layout>
    <Container>
      <a href="/resume">Resume</a>
    </Container>
  </Layout>
);

export default App;
