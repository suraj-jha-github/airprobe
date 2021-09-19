import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Register = ({setDataHeader}) => {
  const [data, setData] = useState()
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let user = localStorage.getItem("userData")
    setData(JSON.parse(user))
  }, [])

  useEffect(() => {
    if(data){
      history.push("/");
    }
  }, [data, history])

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("Please fill the all field");
    } else {
      localStorage.setItem("userData", JSON.stringify(user));
      let userData = JSON.parse(localStorage.getItem("userData"));
      setDataHeader(userData);
      history.push("/");
      alert("Register Successfully");
    }
  };

  return (
    <div className="form-div">
      <Form className="form" onSubmit={formHandler}>
        <h2>Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            value={user.name}
            onChange={inputHandler}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={user.email}
            onChange={inputHandler}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={user.password}
            onChange={inputHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="btn">
          Sign Up
        </Button>
        <p>
          <Link to="/login">Alrady have an account ?</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
