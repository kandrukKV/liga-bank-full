import React from 'react';
import {Helmet} from 'react-helmet';
import './app.scss';
import robotoRegular from '../../fonts/Roboto-Regular.woff2';
import robotoMedium from '../../fonts/Roboto-Medium.woff2';
import robotoBold from '../../fonts/Roboto-Bold.woff2';
import Header from "../header/header";
import Footer from "../footer/footer";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <link rel="preload" href={robotoRegular} as="font" type="font/woff2"/>
        <link rel="preload" href={robotoMedium} as="font" type="font/woff2"/>
        <link rel="preload" href={robotoBold} as="font" type="font/woff2"/>
      </Helmet>
      <Header/>
      <Footer/>

    </div>
  );
};

export default App;
