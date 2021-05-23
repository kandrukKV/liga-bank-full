import React from "react";
import {Helmet} from "react-helmet";
import "./app.scss";
import robotoRegular from "../../fonts/Roboto-Regular.woff2";
import robotoMedium from "../../fonts/Roboto-Medium.woff2";
import robotoBold from "../../fonts/Roboto-Bold.woff2";
import Header from "../header/header";
import Footer from "../footer/footer";
import Slider from "../slider/slider";
import Tabs from "../tabs/tabs";
import Calculator from "../calculator/calculator";
import BranchMap from "../branch-map/branch-map";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <link rel="preload" href={robotoRegular} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={robotoMedium} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={robotoBold} as="font" type="font/woff2" crossOrigin="anonymous"/>
      </Helmet>
      <Header/>
      <Slider/>
      <Tabs/>
      <Calculator/>
      <BranchMap/>
      <Footer/>
    </div>
  );
};

export default App;
