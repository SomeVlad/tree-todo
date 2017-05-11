import React from 'react';
import {Button, ButtonToolbar, ListGroupItem} from 'react-bootstrap';
import '../App.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

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

  render() {
    const {
      category: {id, name},
      addSubcategory,
      editCategory,
      handleDeleteCategory,
      active
    } = this.props;

    return (
      <ListGroupItem
        className={this.state.hover ? 'category hover' : 'category'}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleCategoryClick}
        active={active}
      >
        {name}
        <ButtonToolbar className="pull-right">
          <Button bsSize="xsmall" onClick={() => {
            editCategory(id, name)
          }}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
          </Button>
          <Button bsSize="xsmall" onClick={() => {
            addSubcategory(id)
          }}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
          </Button>
          <Button
            bsStyle="danger"
            bsSize="xsmall"
            onClick={() => {
              handleDeleteCategory(id)
            }}
          >
            <span className="glyphicon glyphicon-trash" aria-hidden="true"/>
          </Button>
        </ButtonToolbar>

        {this.props.children}

      </ListGroupItem>
    )
  }
}

export default Category;