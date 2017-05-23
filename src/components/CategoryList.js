import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Category from './Category';
import AddForm from './AddForm';

class CategoryList extends React.Component {

  handleDeleteCategory = (categoryId, parentId) => {
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
      return todos
        .filter(todo => categoriesToDelete.indexOf(todo.categoryId) !== -1)
        .map(todo => todo.id)
    };
    const categoriesToDelete = findChildren(categoryId, categories);
    const todosToDelete = findTodos(categoriesToDelete, todos);
    deleteCategories(categoryId, parentId, categoriesToDelete);
    deleteTodos(todosToDelete);
  };

  renderCategories = (idsToRender, categories) => {
    const categoriesToRender = [];
    categories.forEach(category => {
      if(idsToRender.indexOf(category.id) >= 0) {
        categoriesToRender.push(
          <Category
            {...this.props}
            active={this.props.activeCategory === category.id}
            key={category.id}
            category={category}
            deleteCategory={this.handleDeleteCategory}
          >
            {category.children.length && category.collapsed ? this.renderCategories(category.children, categories) : null}
          </Category>
        );
      }
    });
    return <ul className="listGroup">{categoriesToRender}</ul>;
  };

  render(){
    const { categories, addCategory, editMode, activeCategory } = this.props;
    const rootCategoriesIds = categories.filter(category => category.parentId === null).map(category => category.id);
    return (
      <div>

        <Row>
          {!editMode &&
            <Col md={12}>
              <AddForm onSumbitForm={addCategory} buttonText="Add Category"/>
              {activeCategory && !categories.some(category => category.id === activeCategory) &&
                <h3>Категория не найдена</h3>
              }
            </Col>
          }
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
