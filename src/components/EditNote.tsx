import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditNote.module.css';
import Box from '@mui/material/Box';
import { makeSlugFromTitle } from '../helpers/helpers';
import notes from '../lib/notes.json';
import TextField from '@mui/material/TextField';
import { Event } from '../vite-env';
import Actions from './Actions';

function EditNote() {
  const slug = useParams().slug;
  const navigate = useNavigate();

  const [content, setNote] = useState('');

  useEffect(() => {
    const noteContent = notes.notes.filter(
      (n) => makeSlugFromTitle(n.title) === slug
    )[0];
    setNote(`${noteContent.title}\n${noteContent?.body}`);
  }, [slug]);

  const handleContentChange = (e: Event) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: Event | React.MouseEvent) => {
    e.preventDefault();

    if (content.length === 0) {
      return;
    }

    const textArray = content.split('\n');
    const title = textArray[0]; // it will always match the first line, even if there is no a 'new line'
    const titleSlug = makeSlugFromTitle(title);
    const body = textArray.filter((_, i) => i !== 0).join('\n');
    const date = new Date().toISOString();
    for (let i = 0; i < notes.notes.length; i++) {
      if (makeSlugFromTitle(notes.notes[i].title) === slug) {
        if (titleSlug === slug) {
          notes.notes[i].body = body;
          notes.notes[i].date = date;
          navigate(`/${slug}`);
        } else {
          notes.notes.splice(i, 1, { title, body, date });
          navigate(`/${makeSlugFromTitle(title)}`);
        }
      }
    }
  };

  return (
    <Box component='form'>
      <Actions
        onSave={handleSubmit}
        onBold={() => console.log('bold')}
        onItalic={() => console.log('bold')}
      />
      <TextField
        multiline
        fullWidth
        placeholder='New note'
        onChange={handleContentChange}
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
        value={content}
      />
    </Box>
  );
}

export default EditNote;
