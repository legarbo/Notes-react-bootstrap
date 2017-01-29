import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EditNoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUpdateNote();
    this.setState({ value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Note Edition</ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="Edit Note" 
            onChange={this.handleChange}/>
        </FormGroup>
        <Button type="submit" bsSize="small">Update</Button>
      {/*<Button type="submit" bsSize="small">Cancel</Button> */} 
      </form>
    );
  }
}
export default EditNoteForm;
