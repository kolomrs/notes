import React, { useState, useEffect } from 'react'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NoteEdit from './components/NoteEdit'
import './App.css'
import { getNotes, saveNotes } from './utils/notes.js'

const App = () => {
  const [notes, setNotes] = useState([])
  const [editingNoteId, setEditingNoteId] = useState(null)

  useEffect(() => {
    setNotes(getNotes())
  }, [])

  const handleAddNote = text => {
    const newNote = {
      id: Date.now(),
      text: text,
    }
    setNotes([...notes, newNote])
    saveNotes([...notes, newNote])
  }

  const handleEditNote = id => {
    setEditingNoteId(id)
  }

  const handleSaveNote = (id, text) => {
    const updatedNotes = notes.map(note => (note.id === id ? { ...note, text } : note))
    setNotes(updatedNotes)
    saveNotes(updatedNotes)
    setEditingNoteId(null)
  }

  const handleCancelEdit = () => {
    setEditingNoteId(null)
  }

  const handleDeleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    saveNotes(updatedNotes)
  }

  return (
    <div className="App">
      <h1>Notes App</h1>
      {editingNoteId ? (
        <NoteEdit
          id={editingNoteId}
          text={notes.find(note => note.id === editingNoteId).text}
          onSave={handleSaveNote}
          onCancel={handleCancelEdit}
        />
      ) : (
        <NoteForm onAdd={handleAddNote} />
      )}
      <NoteList notes={notes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
    </div>
  )
}

export default App
