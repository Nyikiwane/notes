import { useParams } from 'react-router-dom';
import notes from '../lib/notes.json';

interface Note {
  title: string;
  body: string;
}

function Note() {
  const { slug } = useParams();
  const note = notes[slug];

  if (!note) {
    return <div>No note this time, please compose yours!!</div>;
  }

  return <div>{note.body}</div>;
}

export default Note;
