import React from 'react'
import Note from './Note'

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} id={note.id} text={note.text} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default NoteList
