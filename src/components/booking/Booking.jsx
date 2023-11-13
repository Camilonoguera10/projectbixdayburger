import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoardBookings from "./BoardBookings";

function Booking() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time:"",
    diners: "",
    email:""
  })


  function onSave(event){
    /**/
    event.preventDefault();
    console.log("Este es el fomrulario a guardar", form);
  }

  function onChange(event){
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    setForm({...form, [event.target.name]: event.target.value})
  }

  function showBookings (){
    console.log("Log Hola");
  }

  useEffect(() => {
    showBookings()
  },[])

  return (
    <>
      <div className="container wrap">
        <div className="formContent">
          <div className="column">
            <Form className="form_booking" onSubmit={onSave}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <input type="text" name="name" />
                <Form.Control type="text" name="name" value={form.name} onChange={onChange} placeholder="Enter your name" />

                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" name="phone" value={form.phone} onChange={onChange} placeholder="Enter your phone" />

                <Form.Label>Reservation Date</Form.Label>
                <Form.Control type="date" name="date" value={form.date} onChange={onChange} />

                <Form.Label>Reservation Time</Form.Label>
                <Form.Control type="time" name="time" value={form.time} onChange={onChange} />

                <Form.Label>Number of Diners</Form.Label>
                <Form.Control type="number" name="diners" value={form.diners} onChange={onChange} />

                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={form.email} onChange={onChange} placeholder="Enter your email" />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <BoardBookings />
      </div>
    </>
  );
}

export default Booking;
