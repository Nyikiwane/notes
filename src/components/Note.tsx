import { useNavigate, useParams } from 'react-router-dom';
import styles from './Note.module.css';
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';
import { useEffect } from 'react';

function Note() {
  const { slug } = useParams();
  const note = notes.notes.filter((n) => makeSlugFromTitle(n.title) === slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (note.length === 0) {
      navigate('/');
    }
  })

  return (
    note && (
      <div>
        <h1 className={styles.header}>{note[0]?.title}</h1>
        {note[0]?.body}
      </div>
    )
  );
}

export default Note;
