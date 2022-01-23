import { FC, Fragment } from 'react';
import Link from 'next/link';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles['container']}>
        <h1 className={styles['logo']}>Logo</h1>
        <ul className={styles['navigation-menu']}>
          <li className={styles['navigation-item']}>
            <Link href='/' passHref>
              Home
            </Link>
          </li>
          <li className={styles['navigation-item']}>
            <Link href='/product' passHref>
              Product
            </Link>
          </li>
          <li className={styles['navigation-item']}>
            <Link href='/envien-academy' passHref>
              Envien Academy
            </Link>
          </li>
          <li className={styles['navigation-item']}>
            <Link href='/portfolio' passHref>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </Fragment>
  );
};

export default Layout;
