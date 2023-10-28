import React from 'react';
import { Helmet } from "react-helmet";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Helmet>
        <title data-test-id="title">Little Lemon</title>
        <meta
          name="description"
          content="Discover the delightful flavors of Little Lemon restaurant, where we serve up a delectable array of dishes crafted with passion and care. From our mouthwatering appetizers to our tantalizing main courses and irresistible desserts, every bite is a culinary delight. Experience the perfect blend of flavors, ambiance, and exceptional service that will leave you craving for more. Visit Little Lemon today and embark on a culinary journey like no other."
        />
        <meta
          name="og:title"
          content="Experience Culinary Bliss at Little Lemon - A Gastronomic Journey Like No Other"
        />
        <meta
          name="og:description"
          content="Indulge in a culinary journey at Little Lemon, where our expert chefs create exquisite dishes using the freshest ingredients. Experience the perfect blend of flavors, warm hospitality, and a vibrant ambiance that will leave you craving for more. Book your table now and savor the extraordinary at Little Lemon."
        />
        <meta name="og:image" content="https://i.imgur.com/S2r4CoT.jpg" />
      </Helmet>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
