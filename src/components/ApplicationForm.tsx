import React, { ReactElement } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

interface Props {}

export default function ApplicationInput({}: Props): ReactElement {
  return (
    <Formik
      initialValues={{
        company: "",
        position: "",
        location: "",
        method: "",
        coverLetter: "",
        date: ""
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit", data);
        setSubmitting(false);
      }}
    >
      <Form id="application-form">
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-planet teal" />
          <Field
            className="app-form-input"
            placeholder="Company"
            name="company"
            type="input"
          />
        </div>
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-badge teal" />
          <Field
            className="app-form-input"
            placeholder="Position"
            name="postion"
            type="input"
          />
        </div>
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-square-pin teal" />
          <Field
            className="app-form-input"
            placeholder="Location"
            name="location"
            type="input"
          />
        </div>
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-send teal" />
          <Field
            className="app-form-input"
            placeholder="Method"
            name="method"
            type="input"
          />
        </div>
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-pencil teal" />
          <Field
            className="app-form-input"
            placeholder="Cover Letter"
            name="coverLetter"
            type="input"
          />
        </div>
        <div className="icon-input">
          <i className="tim-icons tim-icons-lg icon-watch-time teal" />
          <Field
            className="app-form-input"
            placeholder="Date"
            name="date"
            type="date"
          />
        </div>
        <Link className="btn-main btn" id="add-app-btn" type="submit" to="#">
          <span>Add</span>
        </Link>
      </Form>
    </Formik>
  );
}
