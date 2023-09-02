import { useLocation } from 'react-router-dom';
import styles from './Actions.module.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SaveIcon from '@mui/icons-material/Save';
import TitleIcon from '@mui/icons-material/Title';
import NotesIcon from '@mui/icons-material/Notes';

function Actions() {
  const pathname = useLocation().pathname;

  return (
    <div className={styles.actions}>
      <div className={styles['actions__notes-list']}>
        <NotesIcon />
      </div>
      {pathname !== '/' && (
        <div className={styles['actions__write--del']}>
          <NoteAddIcon sx={{ pr: 2 }} />
          <EditNoteIcon sx={{ pr: 2 }} />
          <DeleteOutlineIcon sx={{ pr: 2 }} />
        </div>
      )}

      {pathname === '/' && (
        <div className={styles['actions__format']}>
          <SaveIcon sx={{ pr: 1 }} />
          <FormatBoldIcon sx={{ pl: 2 }} />
          <FormatItalicIcon sx={{ pl: 2 }} />
          <TitleIcon sx={{ pl: 2 }} />
        </div>
      )}
    </div>
  );
}

export default Actions;
