import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
