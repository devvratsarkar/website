import React, { useState } from "react";
function Contact() {
    const [data, setdata]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
    const type=(e)=>{
        const {name,value}=e.target; // there is use of object destructuring to get form dtat using name and value attribute 
        setdata((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        });
    }
    const submit=(e)=>{
        e.preventDefault();
        alert(`Name: ${data.name}  Email: ${data.email} Phone: ${data.phone} Message: ${data.message}`)
    }
    return (
        <>
            <div className="text-center"><h1>Contact Us</h1></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name: </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                name="name"
                                value={data.name}
                                onChange={type}
                                placeholder="Enter your name*" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                name="email"
                                value={data.email}
                                onChange={type}
                                placeholder="name@example.com*" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone: </label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={type}
                                 placeholder="+91-7055948312*" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" 
                                name="message"
                                value={data.message}
                                onChange={type}
                                rows="3" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;