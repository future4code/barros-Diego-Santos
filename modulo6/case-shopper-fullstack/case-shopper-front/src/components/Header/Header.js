import React from "react";
import logo from "../../assets/img/imgHome.jpg"
import * as style from "./styleHeader"


const Header = () => {

  return  (
    <style.MyHeader>
      <style.Mylogo src={logo} />
      <h1>Mini-Markert</h1>
    </style.MyHeader>
  )
}

export default Header;