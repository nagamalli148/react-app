import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";

function App() {
  return (
    <>
      <Button />
      <Card user="Max" company="Western Union Financial Services" />
      <Card user="Bob" company="I am Learning React" />
      <Card user="Malli" company="I am Learning Javascript" />
      <Card user="Vijaya" company="I am Learning HTML" />

      <Header />
      <Footer />
      <Food />
    </>
  );
}

export default App;
