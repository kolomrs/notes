export const getNotes = () => {
    const notesString = localStorage.getItem('notes');
    return notesString ? JSON.parse(notesString) : [{ id: 1, text: 'My note' }];
};

export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};