import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

function Actions() {
  const pathname = useLocation().pathname;
  const [openNotesMenu, setOpenNotesMenu] = useState(false);

  const openNotesMenuHandler = () => setOpenNotesMenu(true);
  const closeNotesMenuHandler = () => setOpenNotesMenu(false);
  useEffect(() => {
    setOpenNotesMenu(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.actions}>
        <div
          className={styles['actions__notes-list']}
          onClick={openNotesMenuHandler}
        >
          <NotesIcon />
        </div>
        {pathname !== '/' && (
          <div className={styles['actions__write--del']}>
            <Link to='/' className={styles['actions__new-note']}>
              <NoteAddIcon sx={{ pr: 2 }} />
            </Link>
            <EditNoteIcon sx={{ pr: 2 }} />
            <DeleteOutlineIcon />
          </div>
        )}

        {pathname === '/' && (
          <div className={styles['actions__format']}>
            <SaveIcon />
            <FormatBoldIcon sx={{ pl: 2 }} />
            <FormatItalicIcon sx={{ pl: 2 }} />
            <TitleIcon sx={{ pl: 2 }} />
          </div>
        )}
      </div>
      <Drawer
        className={styles.drawer}
        open={openNotesMenu}
        onClose={closeNotesMenuHandler}
        sx={{}}
      >
        <div className={styles['notes-list']}>
          <NotesList />
        </div>
      </Drawer>
    </>
  );
}

export default Actions;
