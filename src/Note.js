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

  save(e) {
    e.preventDefault()

    this.props.onChange(this._newText.value, this.props.index)

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
    return (
      <div className="note">
        <form onSubmit={this.save}>
          <textarea ref={input => this._newText = input} />
          <button id="save"><FaFloppyO /></button>
          </form>
      </div>

    )
  }

  render() {
    return (!this.state.editing) ? this.renderDisplay() : this.renderForm();
  }

}

export default Note
