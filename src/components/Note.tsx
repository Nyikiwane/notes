import { useParams } from 'react-router-dom';
import styles from './Note.module.css'
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';

function Note() {
  const { slug } = useParams();
  const note = notes.notes.filter((n) => makeSlugFromTitle(n.title) === slug);

  if (!note) {
    return (
      <span style={{ color: 'red' }}>
        There ain't notes pal, please compose yours!!
      </span>
    );
  }

  return <div>
    <h1 className={styles.header}>{note[0].title}</h1>
    {note[0].body}
    </div>;
}

export default Note;
