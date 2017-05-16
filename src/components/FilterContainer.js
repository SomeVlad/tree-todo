import React from 'react';
import {FormControl, Form} from 'react-bootstrap';

const FilterContainer = (props) => {
  return (
    <Form style={{marginBottom: "20px"}} inline className="pull-right">
      <label>
        <input
          type="checkbox"
        />{" "}Show Done
      </label>
      <FormControl
        style={{marginLeft: "10px"}}
        type="text"
      />
    </Form>
  )
}

export default FilterContainer;