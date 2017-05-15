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

  handleAddRootCategory = (e) => {
    e.preventDefault();
    const name = this.state.input;
    this.props.addCategory(name);
    this.setState({input: ''});
  };

  //TODO перенести всю логику в контейнер
  handleDeleteCategory = id => {
    const { categories,  deleteCategories, todos, deleteTodos} = this.props;

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

    const findTodos = (categoriesToDelete, todos) => {
      return todos.filter(todo => categoriesToDelete.indexOf(todo.categoryId) !== -1).map(todo => todo.id)
    };

    const categoriesToDelete = findChildren(id, categories);
    const todosToDelete = findTodos(categoriesToDelete, todos);

    deleteCategories(categoriesToDelete);
    deleteTodos(todosToDelete);
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
            openAddSubcategoryModal={this.props.openAddSubcategoryModal}
            openEditCategoryModal={this.props.openEditCategoryModal}
            setActiveCategory={this.props.setActiveCategory}
            toggleCollapseCategory={this.props.toggleCollapseCategory}
            active={this.props.activeCategory === category.id}
            editTodo={this.props.editTodo}
            moveTodo={this.props.moveTodo}
          >
            {category.children.length && category.collapsed ? this.renderCategories(category.children, categories) : null}
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
            <Form className="addForm" inline onSubmit={this.handleAddRootCategory}>
              <FormControl
                type="text"
                placeholder="Enter text"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
              {' '}
              <Button bsStyle="primary" type="submit">
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
