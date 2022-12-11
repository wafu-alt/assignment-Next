import Layout from "../components/Layout";
import styled from "styled-components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Wrap>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Wrap>
  );
}

export default MyApp;

const Wrap = styled.div`
  margin: 0 auto;
  width: 1200px;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 360px;
  }
`;
