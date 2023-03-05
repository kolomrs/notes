import React from 'react';

const Note = ({ id, text, onEdit, onDelete }) => {
    return (
        <div className="note">
            <div className="note-text">{text}</div>
            <div className="note-actions">
                <button onClick={() => onEdit(id)}>Edit</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Note;