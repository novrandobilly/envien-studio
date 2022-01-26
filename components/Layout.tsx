import { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/logo.svg';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles['container']}>
        <Image width={200} height={70} src={Logo} alt='Logo' />
        <ul className={styles['navigation-menu']}>
          {/* <li className={styles['navigation-item']}>
            <Link href='/' passHref>
              Home
            </Link>
          </li> */}
          <li className={styles['navigation-item']}>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              Product
            </ScrollLink>
            {/* <Link href='/product' passHref>
              Product
            </Link> */}
          </li>
          <li className={styles['navigation-item']}>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              Envien Academy
            </ScrollLink>
            {/* <Link href='/envien-academy' passHref>
              Envien Academy
            </Link> */}
          </li>
          <li className={styles['navigation-item']}>
            <ScrollLink to='Portfolio' spy={true} smooth={true} duration={800}>
              Portfolio
            </ScrollLink>{' '}
            {/* <Link href='/portfolio' passHref>
              Portfolio
            </Link> */}
          </li>
        </ul>
      </div>
      {children}
      <footer className={styles['footer']}>
        <p>© 2022 Envien Studio. All Rights Reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
