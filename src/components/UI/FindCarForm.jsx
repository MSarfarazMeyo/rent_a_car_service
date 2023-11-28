import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import carData from "../../assets/data/carData";

const FindCarForm = () => {

  
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        {/* <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup> */}
        <FormGroup className="select__group">
          <select>
            {
              carData.map((item)=>{

                return  <option value="ac">{item.carName}</option>
           
              })
            }
            <option value="non-ac">Select A Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
