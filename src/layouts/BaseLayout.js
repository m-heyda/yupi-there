import React from 'react';
import { GlobalStyles } from '../global/globalStyles';
// import '@babel/polyfill';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    { children }
    <Footer />
  </>
);

export default BaseLayout;
