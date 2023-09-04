import styles from './Layout.module.css';
import Actions from './Actions';
import NotesList from './NotesList';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const pathname = useLocation().pathname;
  return (
    <div className={styles.layout}>
      <div className={styles['notes-list']}>
        <NotesList />
      </div>
      <div className={styles.content}>
        {pathname !== '/' && !pathname.startsWith('/edit') && <Actions />}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
