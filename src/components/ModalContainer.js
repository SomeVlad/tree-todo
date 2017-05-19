import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import React from 'react';
import {closeModal, addSubCategory, saveCategory, setActiveCategory, toggleCollapseCategory} from '../redux/actions';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.defaultValue) {
      this.setState({value: newProps.defaultValue});
    }
    if(newProps.show) {
      document.body.addEventListener('click', this.handleBodyClick)
    } else if(!newProps.show) {
      document.removeEventListener('click', this.handleBodyClick);
    }
  }

  handleBodyClick = (e) => {
    if(e.target.className === "fade in modal"){
      this.handleCloseModal()
    }
  };

  handleChangeCategoryName = e => {
    this.setState({value: e.target.value})
  };

  handleCloseModal = () => {
    this.setState({value: ''});
    this.props.closeModal();
  };

  handleAddSubCategory = () => {
    const name = this.state.value;
    const {
      parentId,
      addSubCategory,
    } = this.props;
    addSubCategory(name, parentId);

  };

  handleSaveCategory = () => {
    const name = this.state.value;
    const {categoryId, saveCategory} = this.props;
    saveCategory(categoryId, name);
  };

  handleSubmit = e => {
    e.preventDefault();
    const {mode, closeModal} = this.props;
    if(mode === 'add') {
      this.handleAddSubCategory();
    } else if(mode === 'edit') {
      this.handleSaveCategory();
    }
    closeModal();
    this.setState({value: ''});
  };
  render() {
    const {show, mode} = this.props;
    
    let submitButtonTitle = "";
    if (mode === 'add') {
      submitButtonTitle = "Add"
    } else if (mode === 'edit') {
      submitButtonTitle = "Save"
    }

    return(
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Type Category Name:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form id="modalForm" onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl
                autoFocus
                type="text"
                placeholder="Enter text"
                value={this.state.value}
                onChange={this.handleChangeCategoryName}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleCloseModal}>Close</Button>
          <Button type="submit" form="modalForm" bsStyle="primary">{submitButtonTitle}</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  let defaultValue = '';
  if(state.modal.mode === 'edit') {
    defaultValue = state.categories.find(category => category.id === state.modal.categoryId).name;
  }
  return {
    show: state.modal.show,
    mode: state.modal.mode,
    parentId: state.modal.parentId,
    categoryId: state.modal.categoryId,
    defaultValue,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    saveCategory: (id, name) => dispatch(saveCategory(id, name)),
    setActiveCategory: id => dispatch(setActiveCategory(id)),
    toggleCollapseCategory: id => dispatch(toggleCollapseCategory(id)),
    addSubCategory: (name, parentId) => dispatch(addSubCategory(name, parentId)),
  }
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);

export default ModalContainer;