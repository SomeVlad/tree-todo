import React from 'react';
import {Button} from 'react-bootstrap';

const Category = props => {
  const {
    category: {id, name},
    addSubcategory,
    editCategory,
    handleDeleteCategory,
  } = props;
  return (
    <li>
      {name}
      <Button bsSize="xsmall" onClick={() => { addSubcategory(id) }}>
        <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
      </Button>
      <Button bsSize="xsmall" onClick={() => { editCategory(id, name) }}>
        <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
      </Button>
      <Button
        bsStyle="danger"
        bsSize="xsmall"
        onClick={() => { handleDeleteCategory(id) }}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
      </Button>
      {props.children}
    </li>
  )
};

export default Category;