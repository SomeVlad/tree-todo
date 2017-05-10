  import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Category from './Category';

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
    const name = this.state.input;
    this.props.addCategory(name);
    this.setState({input: ''});
  };

  renderCategories = (idsToRender, categories) => {
    const categoriesToRender = [];
    categories.forEach(category => {
      if(idsToRender.indexOf(category.id) >= 0) {
        categoriesToRender.push(
          <Category
            key={category.id}
            category={category}
            handleDeleteCategory={this.handleDeleteCategory}
            addSubcategory={this.props.addSubcategory}
            editCategory={this.props.editCategory}
          >
            {category.children.length ? this.renderCategories(category.children, categories) : null}
          </Category>
        );
      }
    });
    return <ul>{categoriesToRender}</ul>;
  };



  handleDeleteCategory = id => {
    const { categories,  deleteCategories} = this.props;
    const findChildren = (id, categories) => {
      const children = categories.find(category => category.id === id).children;
      if(!children.length) {
        return id;
      }
      return [id].concat(children.map(child => findChildren(child, categories)));
    };
    deleteCategories(findChildren(id, categories));
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
        {categories.length ? this.renderCategories(rootCategoriesIds, categories) : null}
      </div>
    )
  }
}

export default CategoryList;


