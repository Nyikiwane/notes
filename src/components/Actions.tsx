import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Actions.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Drawer from '@mui/material/Drawer';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotesIcon from '@mui/icons-material/Notes';
import SaveIcon from '@mui/icons-material/Save';
import TitleIcon from '@mui/icons-material/Title';
import NotesList from './NotesList';
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';

function Actions() {
  const pathname = useLocation().pathname;
  const [openNotesMenu, setOpenNotesMenu] = useState(false);
  const navigate = useNavigate();

  const openNotesMenuHandler = () => setOpenNotesMenu(true);
  const closeNotesMenuHandler = () => setOpenNotesMenu(false);
  useEffect(() => {
    setOpenNotesMenu(false);
  }, [pathname]);

  const deleteNoteHandler = () => {
    for (let i = 0; i < notes.notes.length; i++) {
      if (makeSlugFromTitle(notes.notes[i].title) === pathname.slice(1)) {
        notes.notes.splice(i, 1);

        if (notes.notes.length === 0) {
          return navigate('/');
        } else if (i === notes.notes.length && notes.notes.length >= 1) {
          navigate(`/${makeSlugFromTitle(notes.notes[i - 1].title)}`);
        } else {
          navigate(`/${makeSlugFromTitle(notes.notes[i].title)}`);
        }
      }
    }
  };

  return (
    <>
      <div className={styles.actions}>
        <div
          className={styles['actions__notes-list']}
          onClick={openNotesMenuHandler}
        >
          <NotesIcon />
        </div>
        {pathname !== '/' && !pathname.startsWith('/edit') && (
          <div className={styles['actions__write--del']}>
            <Link to='/'>
              <NoteAddIcon sx={{ pr: 2 }} />
            </Link>
            <Link
              to={!pathname.startsWith('/edit') ? `/edit${pathname}` : pathname}
            >
              <EditNoteIcon sx={{ pr: 2 }} />
            </Link>
            <DeleteOutlineIcon
              onClick={deleteNoteHandler}
              sx={{ cursor: 'pointer' }}
            />
          </div>
        )}

        {pathname.startsWith('/edit') || pathname === '/' ? (
          <div className={styles['actions__format']}>
            <SaveIcon />
            <FormatBoldIcon sx={{ pl: 2 }} />
            <FormatItalicIcon sx={{ pl: 2 }} />
            <TitleIcon sx={{ pl: 2 }} />
          </div>
        ) : null}
      </div>
      <Drawer
        className={styles.drawer}
        open={openNotesMenu}
        onClose={closeNotesMenuHandler}
      >
        <div className={styles['notes-list']}>
          <NotesList />
        </div>
      </Drawer>
    </>
  );
}

export default Actions;
