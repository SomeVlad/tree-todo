import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import classNames from 'classnames';
import '../App.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  //TODO перенести всю логику в контейнер

  handleMouseOver = e => {
    e.stopPropagation();
    this.setState({hover: true})
  };

  handleMouseOut = () => {
    this.setState({hover: false})
  };

  handleCategoryClick = e => {
    e.stopPropagation();
    const {category: {id}} = this.props;
    this.props.setActiveCategory(id);
  };

  handleClickAdd = e => {
    e.stopPropagation();
    const {category: {id}, addSubcategory} = this.props;
    addSubcategory(id);
  };

  handleClickDelete = e => {
    e.stopPropagation();
    const {category: {id}, deleteCategory} = this.props;
    deleteCategory(id);
  };

  render() {
    const {
      category: {id, name},
      editCategory,
      active
    } = this.props;

    const categoryClass = classNames(
      'category',
      {
        active: active,
        hover: this.state.hover,
      },
    );

    return (
      <li>
        <div
          className={categoryClass}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleCategoryClick}
        >
          <span>{name}</span>
          <ButtonToolbar className="pull-right">
            <Button bsSize="xsmall" onClick={() => editCategory(id, name)}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
            </Button>
            <Button bsSize="xsmall" onClick={this.handleClickAdd}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
            </Button>
            <Button
              bsStyle="danger"
              bsSize="xsmall"
              onClick={this.handleClickDelete}
            >
              <span className="glyphicon glyphicon-trash" aria-hidden="true"/>
            </Button>
          </ButtonToolbar>
        </div>
        {this.props.children}
      </li>
    )
  }
}

export default Category;