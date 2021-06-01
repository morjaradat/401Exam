import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export class UpdateForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.update} className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.props.name} onChange={this.props.updateName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" value={this.props.gender} onChange={this.props.updateGender} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
  </Button>

      </Form>
    )
  }
}

export default UpdateForm
