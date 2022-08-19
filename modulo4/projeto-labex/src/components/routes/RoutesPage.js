import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from "../pages/homePageComponents/HomePage";
import { ListTripPage } from "../pages/listTripComponents/ListTripsPage";
import { LoginPage } from "../pages/loginComponents/LoginPage"
import { ApplicationFormPage } from "../pages/appliFormPageComponents/ApplicationFormPage"
import { AdminHomePage } from "../pages/adminHomeComponents/AdminHomePage";
import { CreateTripePage } from "../pages/creatTripPageComponents/CreateTripePage";
import { TripDetailsPage } from "../pages/tripDetailComponents/TripDetailsPage";

export const RoutesPage = () => {
  const [ idTrip, setIdTrip ] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/trip/list" element={ <ListTripPage/> }/>
        <Route path="/trip/application" element={ <ApplicationFormPage/>}/>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/admin/trip/list" element={ <AdminHomePage setIdTrip={setIdTrip} /> }/>
        <Route path="/admin/trips/:id" element={ <TripDetailsPage/>}/>
        <Route path="/admin/trips/create" element={ <CreateTripePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}