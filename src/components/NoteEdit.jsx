import React, { useState } from 'react';

const NoteEdit = ({ id, text, onSave, onCancel }) => {
    const [editedText, setEditedText] = useState(text);

    const handleSave = () => {onSave(id, editedText)}

    return (
        <div >
                <textarea
                    className="note-edit"
                    value={editedText}
                    onChange={(event) => setEditedText(event.target.value)}
                />
            <div className="note-edit-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default NoteEdit;