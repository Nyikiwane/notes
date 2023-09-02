import styles from './Layout.module.css';
import Actions from './Actions';
import NotesList from './NotesList';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles['notes-list']}>
        <NotesList />
      </div>
      <div className={styles.content}>
        <Actions />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
