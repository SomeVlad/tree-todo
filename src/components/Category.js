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

  handleToggleCollapse = e => {
    e.stopPropagation();
    this.props.toggleCollapseCategory(this.props.category.id)
  };

  handleOpenEditCategoryModal = e => {
    e.stopPropagation();
    this.props.openEditCategoryModal(this.props.category.id)
  };

  handleOpenAddSubcategoryModal = e => {
    e.stopPropagation();
    this.props.openAddSubcategoryModal(this.props.category.id)
  };

  handleClickCategory = e => {
    e.stopPropagation();
    const {history, location, category, editMode, activeCategory} = this.props;
    if(!editMode) {
      if(activeCategory === category.id) {
        history.push(`/categories/${location.search}`);
      } else {
        history.push(`/categories/${category.id}${location.search}`);
      }
    }
  };

  handleDeleteCategory = e => {
    e.stopPropagation();
    const {category: {id, parentId}, deleteCategory, location, history} = this.props;
    if(confirm('Удалить категорию и все подкатегории?')) {
      deleteCategory(id, parentId);
      history.push(`/categories/${location.search}`);
    }
  };

  handleChangeCategoryId = e => {
    e.stopPropagation();
    const {changeTodoEditValue, category: {id}} = this.props;
    changeTodoEditValue({categoryId: id});
  };

  render() {
    const {
      category: {id, name, children, collapsed},
      todoEditForm: {categoryId},
      active,
      editMode,
    } = this.props;

    const categoryClass = classNames(
      'category',
      {
        active: active,
        hover: this.state.hover,
        'edit-mode': this.props.editMode,
      },
    );

    const categoryCollapseClass = classNames(
      'glyphicon',
      {
        'glyphicon-triangle-right': !collapsed,
        'glyphicon-triangle-bottom': collapsed,
      },
    );

    let buttons = null;

    if(!editMode) {
      buttons = (
        <ButtonToolbar className="pull-right">
          <Button bsSize="xsmall" onClick={this.handleOpenEditCategoryModal}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
          </Button>
          <Button bsStyle="success" bsSize="xsmall" onClick={this.handleOpenAddSubcategoryModal}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
          </Button>
          <Button bsStyle="danger" bsSize="xsmall" onClick={this.handleDeleteCategory}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"/>
          </Button>
        </ButtonToolbar>
      )
    } else if(editMode && categoryId !== id) {
      buttons = (
        <ButtonToolbar className="pull-right">
          <Button onClick={this.handleChangeCategoryId} bsSize="xsmall">
            <span className="glyphicon glyphicon_flip glyphicon-share-alt" aria-hidden="true"/>
          </Button>
        </ButtonToolbar>
      )
    }

    return (
      <li>
        <div
          className={categoryClass}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleClickCategory}
        >
          {children.length > 0 &&
            <Button
              className="category__triangle"
              bsSize="xsmall"
              onClick={this.handleToggleCollapse}
            >
                <span className={categoryCollapseClass}/>
            </Button>
          }
          <span className="category__title">{name}</span>
          {buttons}
        </div>
        {this.props.children}
      </li>
    )
  }
}

export default Category;