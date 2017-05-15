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

  handleMouseOver = e => {
    e.stopPropagation();
    if(e.target === e.currentTarget){
      this.setState({hover: true})
    }
  };

  handleMouseOut = e => {
    e.stopPropagation();
    this.setState({hover: false})
  };

  render() {
    const {
      category: {id, name, children, collapsed},
      editCategory,
      addSubcategory,
      setActiveCategory,
      deleteCategory,
      toggleCollapseCategory,
      active,
    } = this.props;

    const categoryClass = classNames(
      'category',
      {
        active: active,
        hover: this.state.hover,
      },
    );


    const categoryCollapseClass = classNames(
      'glyphicon',
      {
        'glyphicon-triangle-right': !collapsed,
        'glyphicon-triangle-bottom': collapsed,
      },
    );

    return (
      <li>
        <div
          className={categoryClass}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={e => {setActiveCategory(e, id)}}
        >
          {children.length > 0 &&
            <Button className="category__triangle" bsSize="xsmall" >
              <span onClick={e => {toggleCollapseCategory(e, id)}} className={categoryCollapseClass}/>
            </Button>
          }
          <span className="category__title">{name}</span>
          <ButtonToolbar className="pull-right">
            <Button bsSize="xsmall" onClick={e => editCategory(e, id, name)}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
            </Button>
            <Button bsStyle="success" bsSize="xsmall" onClick={e => addSubcategory(e, id)}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
            </Button>
            <Button bsStyle="danger" bsSize="xsmall" onClick={() => {deleteCategory(id)}}>
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