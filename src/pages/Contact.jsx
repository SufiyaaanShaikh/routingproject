import React, { useState } from "react";
import Header from "../common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });
  let [userData, setUserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };
  let handleSubmit = (event) => {
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };
    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.uemail === formData.uemail || v.uphone === formData.uphone
      );
      if (checkFilterUser.length === 1) {
        toast.error("The input already exists");
      } else {
        let oldUserData = [...userData, currentUserFormdata];
        setUserData(oldUserData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;

      let checkFilterUser = userData.filter(
        (v, i) =>
          (v.uemail === formData.uemail || v.uphone === formData.uphone) &&
          i !== editIndex
      );
      if (checkFilterUser.length == 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["uemail"] = formData.uemail;
        oldData[editIndex]["uphone"] = formData.uphone;
        oldData[editIndex]["umessage"] = formData.umessage;
        setUserData(oldData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      } else {
        toast.error("The input already exists");
      }
    }

    event.preventDefault();
  };
  let deleteRow = (index) => {
    let filterDataafterDelete = userData.filter((v, i) => i != index);
    setUserData(filterDataafterDelete);
  };
  let editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i == indexNumber)[0];
    editData["index"] = indexNumber;
    setFormData(editData);
  };

  return (
    <div>
      <Toaster />
      <Header />
      <Container fluid>
        <Row>
          <Col lg={5}>
            <form className="right" onSubmit={handleSubmit}>
              {userData.length}
              <div className="input-box">
                <input
                  onChange={getValue}
                  value={formData.uname}
                  type="text"
                  placeholder="Name"
                  name="uname"
                />
              </div>
              <div className="input-box">
                <input
                  onChange={getValue}
                  value={formData.uemail}
                  type="email"
                  placeholder="Email"
                  name="uemail"
                />
              </div>
              <div className="input-box">
                <input
                  onChange={getValue}
                  value={formData.uphone}
                  type="tel"
                  placeholder="Phone"
                  name="uphone"
                />
              </div>
              <div className="input-box">
                <textarea
                  onChange={getValue}
                  value={formData.umessage}
                  placeholder="Message"
                  cols="50"
                  rows="7"
                  name="umessage"
                ></textarea>
              </div>
              <div className="submit-box">
                <div className="input-box">
                  <input type="checkbox" id="checkBox" />
                  <label>
                    Keep me up to date with news and offers from time to time by
                    email
                  </label>
                </div>
                <button>{formData.index !== "" ? "Update" : "Save"}</button>
              </div>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((obj, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={() => deleteRow(index)}>
                            Delete
                          </button>
                          <button onClick={() => editRow(index)}>Edit</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No data Found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
