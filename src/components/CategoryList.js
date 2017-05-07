import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.input
    this.props.addCategory(name);
    this.setState({input: ''});
  };

  renderCategories = (idsToRender, categories) => {
    const categoriesToRender = [];
    categories.forEach(category => {
      if(idsToRender.indexOf(category.id) >= 0) {
        categoriesToRender.push(
          <li key={category.id}>
            {category.name}
            <Button bsSize="xsmall" onClick={() => {this.props.addSubcategory(category.id)}}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </Button>
            <Button bsSize="xsmall" onClick={() => {this.props.editCategory(category.id, category.name)}}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </Button>
            <Button
              bsStyle="danger"
              bsSize="xsmall"
              onClick={() => { this.handleDeleteCategory(category.id)}}
            >
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
            {category.children.length ? this.renderCategories(category.children, categories) : null}
          </li>
        )
      }
    });
    return <ul>{categoriesToRender}</ul>;
  };

  handleDeleteCategory = id => {
    const { categories,  deleteCategory} = this.props;
    const categoriesToDelete = [];
    const findCategoriesToDelete = id => {
      categoriesToDelete.push(id);
      const children = categories.find(category => category.id === id).children;
      children.forEach(child => findCategoriesToDelete(child)); 
    }
    findCategoriesToDelete(id);
    deleteCategory(categoriesToDelete);
  }

  render(){
    const { categories } = this.props;
    const rootCategoriesIds = categories.filter(category => category.parentId === null).map(category => category.id);
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            placeholder="Enter text"
            value={this.state.input}
            onChange={this.handleInputChange}/>
          <Button type="submit">
            Add category
          </Button>
        </Form>
        {categories.length && this.renderCategories(rootCategoriesIds, categories)}
      </div>
    )
  }
};

export default CategoryList;