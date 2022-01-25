import { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../assets/logo.svg';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles['container']}>
        <Image width={200} height={70} src={Logo} alt='Logo' />
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
