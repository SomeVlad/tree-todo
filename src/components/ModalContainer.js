import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import React from 'react';
import {closeModal, addCategory, saveCategory} from '../redux/actions';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.defaultValue) {
      this.setState({inputValue: newProps.defaultValue});
    }
  }

  handleChangeCategoryName = (e) => {
    this.setState({inputValue: e.target.value})
  };

  handleCloseModal = () => {
    this.setState({inputValue: ''});
    this.props.closeModal();
  };

  handleAddSubCategory = (e) => {
    e.preventDefault();
    const name = this.state.inputValue;
    const {parentId, addSubCategory, closeModal} = this.props;
    addSubCategory(name, parentId);
    this.setState({inputValue: ''});
    closeModal();
  };

  handleSaveCategory = (e) => {
    e.preventDefault();
    const name = this.state.inputValue;
    const {id, saveCategory, closeModal} = this.props;
    saveCategory(id, name);
    this.setState({inputValue: ''})
    closeModal();
  }

  render() {
    const {show, mode} = this.props;
    
    let submitButton;
    if (mode === 'add') {
      submitButton = <Button type="submit" onClick={this.handleAddSubCategory} bsStyle="primary">Add</Button>
    } else if (mode === 'edit') {
      submitButton = <Button type="submit" onClick={this.handleSaveCategory} bsStyle="primary">Save</Button>
    }

    return(
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Type Category Name:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={this.handleAddSubCategory}>
            <FormGroup>
              <FormControl
                autoFocus
                type="text"
                placeholder="Enter text"
                value={this.state.inputValue}
                onChange={this.handleChangeCategoryName}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleCloseModal}>Close</Button>
          {submitButton}
        </Modal.Footer>
      </Modal>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    mode: state.modal.mode,
    parentId: state.modal.parentId,
    id: state.modal.id,
    defaultValue: state.modal.defaultValue,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addSubCategory: (name, parentId) => dispatch(addCategory(name, parentId)),
    saveCategory: (id, name) => dispatch(saveCategory(id, name)),
  }
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);

export default ModalContainer;