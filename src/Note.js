import React, { Component } from 'react'

class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)

  }

  edit() {
    this.setState = {
      editing: true
    }
  }

  remove() {
    alert('note removed')
  }

  save() {
    alert('note saved')

    this.setState = {
      editing: false
    }
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>Remove</button>
        </span>
      </div>
    )
  }

  renderForm() {
    // return form
    return <h1>Form</h1>
  }

  render() {
    return (!this.state.editing) ? this.renderDisplay() : this.renderForm();
  }

}

export default Note
