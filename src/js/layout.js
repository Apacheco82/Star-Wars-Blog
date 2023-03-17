import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/home.jsx";
import {Single} from "./views/single.jsx";
import injectContext from "./store/appContext";
import {Navbar} from "./component/navbar.jsx";
import {Footer} from "./component/footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";


  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:category/:id" element={<Single />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
