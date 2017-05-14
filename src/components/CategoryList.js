import React from 'react';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';
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

  //TODO перенести всю логику в контейнер

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.input;
    this.props.addCategory(name);
    this.setState({input: ''});
  };

  handleDeleteCategory = id => {
    const { categories,  deleteCategories, toDos, deleteToDos} = this.props;

    const findChildren = (id, categories) => {
      const listToDelete = [];
      const lookForChildren = id => {
        listToDelete.push(id);
        const children = categories.find(category => category.id === id).children;
        children.forEach(child => lookForChildren(child))
      };
      lookForChildren(id);
      return listToDelete;
    };

    const findToDos = (categoriesToDelete, toDos) => {
      return toDos.filter(toDo => categoriesToDelete.indexOf(toDo.categoryId) !== -1).map(toDo => toDo.id)
    };

    const categoriesToDelete = findChildren(id, categories);
    const toDosToDelete = findToDos(categoriesToDelete, toDos);

    deleteCategories(categoriesToDelete);
    deleteToDos(toDosToDelete);
  };

  renderCategories = (idsToRender, categories) => {
    const categoriesToRender = [];
    categories.forEach(category => {
      if(idsToRender.indexOf(category.id) >= 0) {
        categoriesToRender.push(
          <Category
            key={category.id}
            category={category}
            deleteCategory={this.handleDeleteCategory}
            addSubcategory={this.props.addSubcategory}
            editCategory={this.props.editCategory}
            setActiveCategory={this.props.setActiveCategory}
            active={this.props.activeCategory === category.id}
          >
            {category.children.length ? this.renderCategories(category.children, categories) : null}
          </Category>
        );
      }
    });
    return <ul className="listGroup">{categoriesToRender}</ul>;
  };

  render(){
    const { categories } = this.props;
    const rootCategoriesIds = categories.filter(category => category.parentId === null).map(category => category.id);
    return (
      <div>
        <Row>
          <Col md={12}>
            <Form className="addForm" inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Enter text"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
              <Button type="submit">
                Add category
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="categoriesWrapper" md={12}>
            {categories.length ? this.renderCategories(rootCategoriesIds, categories) : null}
          </Col>
        </Row>
      </div>
    )
  }
}

export default CategoryList;


