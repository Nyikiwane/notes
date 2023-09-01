import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import notes from '../lib/notes.json';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <ul className={styles['menu-list']}>
          {Object.entries(notes).map(([slug, { title, body }]) => {
            return (
              <li className={styles['menu-note']} key={slug}>
                <Link to={slug} className={styles['menu-note__note']}>
                  <span>{title}</span>
                  <span className={styles['menu-note__body']}>{body}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;
