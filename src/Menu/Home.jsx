import React from "react";
import web from "../logo.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
function Home() {
    return (
        <>
          <Common name="Welcome to Home page" imgsrc={web} visit="/contact-us" btnname="Contact Now"/>
        </>
    )
}
export default Home;