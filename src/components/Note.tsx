import { useParams } from 'react-router-dom';
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';

function Note() {
  const { slug } = useParams();
  const note = notes.notes.filter((n) => makeSlugFromTitle(n.title) === slug);

  if (!note) {
    return <div>No note this time, please compose yours!!</div>;
  }

  return <div>{note[0].body}</div>;
}

export default Note;
