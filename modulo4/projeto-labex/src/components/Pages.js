import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { ListTripPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage"
import { ApplicationFormPage } from "./pages/ApplicationFormPage"
import { AdminHomePage } from "./pages/AdminHomePage";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/trip/list/:user" element={ <ListTripPage/> }/>
        <Route path="/trip/application" element={ <ApplicationFormPage/>}/>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/admin/home/page" element={ <AdminHomePage/> }/>
      </Routes>
    </BrowserRouter>
  )
}