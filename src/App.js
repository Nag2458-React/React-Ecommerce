import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Reducer from "./Reducer";
import Example1 from "./Example1.js";
import Example2 from "./Example2.js";
import Login from "./Login.js";
import Forms from "./Forms.js";
import Form1 from "./Form1.js";
import Form2 from "./Form2.js";
import Api1 from "./Api1.js";
import Api2 from "./Api2.js";
import Footer from "./Footer.js";
import Products from "./Products.js";
import UseContext from "./UseContext.js";
import Reducer1 from "./Reducer1";
import Reducer2 from "./Reducer2";
import "./App.css";
import { UserContextProvider } from "./context/userContext.js";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Example1" element={<Example1 />} />
            <Route path="/Example2" element={<Example2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Form1" element={<Form1 />} />
            <Route path="/Form2" element={<Form2 />} />
            <Route path="/Api1" element={<Api1 />} />
            <Route path="/Api2" element={<Api2 />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/reducer" element={<Reducer />} />
            <Route path="/reducer1" element={<Reducer1 />} />
            <Route path="/reducer2" element={<Reducer2 />} />
          </Routes>
          <Footer />
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
