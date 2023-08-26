import styles from './Layout.module.css';

// interface Props {
//   children: React.ReactNode;
// }

const notes = [
  {
    title: 'Title 1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus enim, architecto debitis maxime reprehenderit porro natus repellat quam mollitia dignissimos quis magnam neque ullam ab adipisci voluptate deserunt nisi! Veritatis laborum repellat obcaecati, maiores sunt ipsum. Maiores deleniti alias odio autem similique accusamus, libero reiciendis unde aut optio fuga illo, modi laborum fugit quidem. Culpa quos non neque iste?',
  },
  {
    title: 'Title 2',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus enim, architecto debitis maxime reprehenderit porro natus repellat quam mollitia dignissimos quis magnam neque ullam ab adipisci voluptate deserunt nisi! Veritatis laborum repellat obcaecati, maiores sunt ipsum. Maiores deleniti alias odio autem similique accusamus, libero reiciendis unde aut optio fuga illo, modi laborum fugit quidem. Culpa quos non neque iste?',
  },
  {
    title: 'Title 3',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus enim, architecto debitis maxime reprehenderit porro natus repellat quam mollitia dignissimos quis magnam neque ullam ab adipisci voluptate deserunt nisi! Veritatis laborum repellat obcaecati, maiores sunt ipsum. Maiores deleniti alias odio autem similique accusamus, libero reiciendis unde aut optio fuga illo, modi laborum fugit quidem. Culpa quos non neque iste?',
  },
  {
    title: 'Title 4',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus enim, architecto debitis maxime reprehenderit porro natus repellat quam mollitia dignissimos quis magnam neque ullam ab adipisci voluptate deserunt nisi! Veritatis laborum repellat obcaecati, maiores sunt ipsum. Maiores deleniti alias odio autem similique accusamus, libero reiciendis unde aut optio fuga illo, modi laborum fugit quidem. Culpa quos non neque iste?',
  },
];

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
          <ul className={styles['menu-list']}>
            {notes.map((n) => (
              <li className={styles['menu-note']} key={n.title}>
                <a className={styles['menu-note__note']} href='/'>
                  <span>{n.title}</span>
                </a>
              </li>
            ))}
          </ul>
      </div>
      <div className={styles.content}>Content</div>
    </div>
  );
}

export default Layout;
