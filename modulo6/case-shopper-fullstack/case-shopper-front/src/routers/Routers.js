import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EndPage from "../pages/EndPage/endPage";
import Home from "../pages/Home/home";


const Routers = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/pedido" element />
        <Route path="/endPage" element = {<EndPage />} />
      </Routes>

    </BrowserRouter>
  )

};

export default Routers;