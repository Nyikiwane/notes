import './CreateNote.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ChangeEvent, useState } from 'react';
import notes from '../lib/notes.json';

type E = ChangeEvent<HTMLInputElement>;

function CreateNote() {
  const [note, setNote] = useState('');

  const onChangeHandler = (e: E) => {
    setNote(e.target.value);
  };

  const onSubmitHandler = (e: E) => {
    e.preventDefault();

    const text = note.split('\n');
    const title = text[0]; // it will always match the first line, even if there is no a 'new line'
    const body = text.filter((_, i) => i !== 0).join('\n');
    const date = new Date().toISOString();
    notes.notes.push({ title, body, date });
  };

  return (
    <Box component='form' onSubmit={onSubmitHandler}>
      <TextField
        multiline
        fullWidth
        placeholder='New note'
        onChange={onChangeHandler}
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
      />
      <button type='submit'>submit</button>
    </Box>
  );
}

export default CreateNote;
