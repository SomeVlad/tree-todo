import React from 'react';

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
  //
  renderCategories = (idsToRender, allCategories) => {
    const categoriesToRender = [];
    allCategories.forEach(category => {
      if(idsToRender.indexOf(category.id) >= 0) {
        categoriesToRender.push(
          <li key={category.id}>
            {category.name}
            <button onClick={() => {
              this.props.showModal(category.id)
            }}>
              +
            </button>
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
          <button>
            Add category
          </button>
        </form>
        {categories.length && this.renderCategories(rootCategoriesIds, categories)}
      </div>
    )
  }
};

export default CategoryList;