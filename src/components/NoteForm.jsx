import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default NoteForm;