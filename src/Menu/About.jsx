import React from "react";
import Common from "./Common";
import web from "../logo.svg"
function About() {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact-us" btnname="Contact Now"/>
        </>
    )
}
export default About;