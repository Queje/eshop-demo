import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>L'E-Shop</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main id="app" data-testid="layout">
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
