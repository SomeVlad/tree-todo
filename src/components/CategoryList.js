import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  renderedCategoryIds = [];

  handleInputChange = (e) => {
    this.setState({ input:e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCategory(this.state.input);
    this.setState({input: ''});
  };

  renderCategories = (idsToRender, allCategories) => {
    const categoriesToRender = [];
    allCategories.forEach(category => {
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
            <Button bsStyle="danger" bsSize="xsmall">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
            {category.children.length ? this.renderCategories(category.children, allCategories) : null}
          </li>
        )
      }
    });
    return <ul>{categoriesToRender}</ul>;
  };

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