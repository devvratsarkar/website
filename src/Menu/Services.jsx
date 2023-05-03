import React from "react";
import Card from "./Card";
import img from "../lo.jpg"
function Services() {
    return (
        <>
            <div className="my-5">
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4 d-flex">
                            <Card img={img} go="/contact-us" btname="Contact Now" />
                            <Card img={img} go="/contact-us" btname="Contact Now" />
                            <Card img={img} go="/contact-us" btname="Contact Now" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;