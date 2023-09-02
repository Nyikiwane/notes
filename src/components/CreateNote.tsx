import './CreateNote.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ChangeEvent } from 'react';

// will put the header, body, paragraph, create, italic, bold
function CreateNote() {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log((e.currentTarget as HTMLInputElement).value);
  };

  return (
    <Box component='form'>
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
