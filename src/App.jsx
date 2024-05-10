import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import MyUseEffectComp from "./MyUseEffectComp";

function App() {
  return (
    <>
      <MyUseEffectComp />
      <Counter />
      <MyComponent />
      <Button />
      <Card user="Max" company="Western Union Financial Services" />
      <Card user="Bob" company="I am Learning React" />
      <Card user="Malli" company="I am Learning Javascript" />
      <Header />
      <Footer />
      <Food />
    </>
  );
}

export default App;
