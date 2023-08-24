import styles from './Layout.module.css';

// interface Props {
//   children: React.ReactNode;
// }

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <ul>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
        </ul>
      </div>
      <div className={styles.content}>Content</div>
    </div>
  );
}

export default Layout;
