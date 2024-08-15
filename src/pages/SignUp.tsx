import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import LiftOffBackgroundImg from "../components/LiftOffBackgroundImg";
import logo from "../images/astral-nav-logo-300x300.png";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

interface State {}

export default class SignUp extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div id="form-side-bar">
          <Link to="/" className="brand-login" >
            <img
              src={logo}
              alt="Atral Nav"
              className="brand-img"
              id="brand-img-login"
            />
            <h1 className="brand-text" id="brand-text-login">
              ASTRAL NAV
            </h1>
          </Link>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              terms: false
            }}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              console.log("submit", data);
              setSubmitting(false);
            }}
          >
            <div id="form-card" >
              <Form>
                <Field placeholder="Full Name" name="fullName" type="input" />
                <Field placeholder="Email" name="email" type="email" />
                <Field placeholder="Password" name="password" type="password" />
                <Link className="btn-main btn" type="submit" to="/applications">
                  <span>Launch</span>
                </Link>
              </Form>
            </div>
          </Formik>
        </div>
        <LiftOffBackgroundImg />
      </>
    );
  }
}
