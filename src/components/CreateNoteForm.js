import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class CreateNoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount() {
    console.log('Component CreateNoteForm is Mounted');
  }
  handleOnChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length !== 0) {
      this.props.createNote(this.state.value);
    }
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Note length unlimited</ControlLabel>
          <FormControl 
            value={this.state.value}
            onChange={this.handleOnChange}
            componentClass="textarea" 
            placeholder="Create Note" />
        </FormGroup>
        <Button type="submit" bsSize="small">Create Note</Button>
      </form>
    );
  }
}

export default CreateNoteForm;
