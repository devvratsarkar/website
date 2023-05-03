import React from "react";
// import web from "../logo.svg";
import { NavLink } from "react-router-dom";
function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-5 d-flex justify-content-center flex-column">
                                        <h1>{props.name}</h1>
                                        <p className="my-3">we the the profession developer team for building awesome website.</p>
                                        <div className="mt-3">
                                            <NavLink to={props.visit}className="btn btn-outline-success "> {props.btnname}</NavLink>
                                        </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animation" alt="Images"/>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
            </section>
        </>
    )
}
export default Common;