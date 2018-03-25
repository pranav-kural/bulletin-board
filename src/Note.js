import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

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
    this.setState({
      editing: true
    })
  }

  remove() {
    alert('note removed')
  }

  save() {
    alert('note saved')

    this.setState({
      editing: false
    })
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button id="edit" onClick={this.edit}><FaPencil /></button>
          <button id="remove" onClick={this.remove}><FaTrash /></button>
        </span>
      </div>
    )
  }

  renderForm() {
    // return form
    return (
      <div className="note">
        <form>
          <textarea />
          <button id="save" onClick={this.save}><FaFloppyO /></button>
          </form>
      </div>

    )
  }

  render() {
    return (!this.state.editing) ? this.renderDisplay() : this.renderForm();
  }

}

export default Note
