import { useState } from 'react';
import './CreateNote.module.css';
import Box from '@mui/material/Box';
import { Event } from '../vite-env';
import notes from '../lib/notes.json';
import TextField from '@mui/material/TextField';
import Actions from './Actions';
import { useNavigate } from 'react-router-dom';
import { makeSlugFromTitle } from '../helpers/helpers';

function CreateNote() {
  const [note, setNote] = useState('');
  const navigation = useNavigate();

  const onChangeHandler = (e: Event) => {
    setNote(e.target.value);
  };

  const onSubmitHandler = (e: Event) => {
    e.preventDefault();

    const text = note.split('\n');
    const title = text[0]; // it will always match the first line, even if there is no a 'new line'
    const body = text.filter((_, i) => i !== 0).join('\n');
    const date = new Date().toISOString();
    notes.notes.push({ title, body, date });
    navigation(`/${makeSlugFromTitle(title)}`);
  };

  return (
    <Box component='form' onSubmit={onSubmitHandler}>
      <Actions
        saveType='submit'
        onBold={() => console.log('bold')}
        onItalic={() => console.log('bold')}
        onHeading={() => console.log('bold')}
      />
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
    </Box>
  );
}

export default CreateNote;
