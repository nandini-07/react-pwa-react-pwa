import React, { useState } from "react";
import "./DataForm.css";
const DataForm = () => {
  const Data = [
    {
      FName: "Nandini",
      LName: "Kanungo",
      course: "React",
      age: "23",
    },
    {
      FName: "Nakiya",
      LName: "Deewan",
      course: "C#",
      age: "23",
    },
    {
      FName: "Nikita",
      LName: "Pandey",
      course: "Java and Web Tech.",
      age: "23",
    },
  ];

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const [newItem, setNewItem] = useState(Data);

  const nameChangeHandler = (e) => {
    setFname(e.target.value);
  };
  const lastNameChangeHandler = (e) => {
    setLname(e.target.value);
  };
  const courseChangeHandler = (e) => {
    setCourse(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const saveData = (newEnteredData) => {
    const newData = {
      ...newEnteredData,
    };
    addNewdataHandler(newData);
  };
  const addNewdataHandler = (data) => {
    setNewItem((prevData) => {
      return [data, ...prevData];
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const submittedData = {
      FName: fname,
      LName: lname,
      course: course,
      age: age,
    };
    saveData(submittedData);
    setFname("");
    setLname("");
    setCourse("");
    setAge("");
  };
  return (
    <div className="container">
      <h1 className="mt-5">Learner's Details !</h1>
      <table class="table table-light table-border bg-light mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Course</th>
            <th scope="col">Age</th>
          </tr>
        </thead>

        {newItem.map((data) => {
          return (
            <tbody>
              <tr>
                <td scope="col">{data.FName}</td>
                <td scope="col">{data.LName}</td>
                <td scope="col">{data.course}</td>
                <td scope="col">{data.age}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h1 className="mt-5">Please Enter Your Details here !</h1>
      <form
        onSubmit={submitHandler}
        className="container bg-light table-border mt-5"
      >
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="text"
            value={fname}
            onChange={nameChangeHandler}
            className="form-control table-border"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            value={lname}
            onChange={lastNameChangeHandler}
            className="form-control table-border"
            id="exampleInputPassword1"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Course</label>
          <input
            type="text"
            value={course}
            onChange={courseChangeHandler}
            className="form-control table-border"
            id="exampleInputCourse"
            placeholder="Enter Course"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Age</label>
          <input
            type="text"
            value={age}
            onChange={ageChangeHandler}
            className="form-control table-border"
            id="exampleInputAge"
            placeholder="Enter Age"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default DataForm;
