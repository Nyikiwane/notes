import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import notes from '../lib/notes.json';
import { useEffect, useState } from 'react';
import Actions from './Actions';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const [path, setPath] = useState('/');
  const pathname = useLocation()?.pathname; // to strip the /
  useEffect(() => {
    if (pathname !== '/') {
      setPath(pathname.slice(1));
    }
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <ul className={styles['menu-list']}>
          {Object.entries(notes).map(([slug, { title, body }]) => {
            return (
              <li
                className={`${styles['menu-note']} ${
                  path === slug ? styles['menu-note__active--note'] : ''
                }`}
                key={slug}
              >
                <Link to={slug} className={styles['menu-note__note']}>
                  <span>{title}</span>
                  <span className={styles['menu-note__body']}>{body}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.content}>
        <div>
          <Actions />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
