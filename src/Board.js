import React, { Component } from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import Note from './Note'

class Board extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.add = this.add.bind(this)
    this.nextId = this.nextId.bind(this)
  }

  eachNote(note, i) {
    return <Note key={i} index={i} onChange={this.update} onRemove={this.remove}>{note.note}</Note>
  }

  update(newText, i) {
    console.log("updating the item at index", i, newText)
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id) {
    console.log("removing the item at index", id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  add(text) {
    console.log("adding a new note", text)
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }))
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  render() {

    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, "New Text")} id="add"><FaPlus /></button>
      </div>
    )
  }

}

export default Board
