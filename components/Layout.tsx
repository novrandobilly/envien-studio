import { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { Backdrop } from './UI/Modal';

import Sidedrawer from './Sidedrawer';

import Logo from '../assets/logo.svg';
import BlackLogo from '../assets/black-logo.svg';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const [showSidedrawer, setShowSidedrawer] = useState<boolean>(false);
  const openSidedrawerHandler = () => {
    setShowSidedrawer(true);
  };
  const closeSidedrawerHandler = () => {
    setShowSidedrawer(false);
  };
  return (
    <Fragment>
      <div className={styles['container']}>
        <Image width={200} height={70} src={Logo} alt='Logo' />
        <ul className={styles['navigation-menu']}>
          <li className={styles['navigation-item']}>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              Product
            </ScrollLink>
          </li>
          <li className={styles['navigation-item']}>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              Envien Academy
            </ScrollLink>
          </li>
          <li className={styles['navigation-item']}>
            <ScrollLink to='Portfolio' spy={true} smooth={true} duration={800}>
              Portfolio
            </ScrollLink>{' '}
          </li>
        </ul>

        <div className={styles['hamburger-icon']} onClick={openSidedrawerHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {showSidedrawer && <Backdrop onCancel={closeSidedrawerHandler} />}
        <Sidedrawer show={showSidedrawer} onCancel={closeSidedrawerHandler}>
          <div className={styles['dropdown-logo']}>
            <Image width={100} height={35} src={BlackLogo} alt='Logo' />
          </div>

          <ul className={styles['dropdown-menu']}>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              <li className={styles['dropdown-item']} onClick={closeSidedrawerHandler}>
                Product
              </li>
            </ScrollLink>
            <ScrollLink to='OurServices' spy={true} smooth={true} duration={800}>
              <li className={styles['dropdown-item']} onClick={closeSidedrawerHandler}>
                Envien Academy
              </li>
            </ScrollLink>
            <ScrollLink to='Portfolio' spy={true} smooth={true} duration={800}>
              <li className={styles['dropdown-item']} onClick={closeSidedrawerHandler}>
                Portfolio
              </li>
            </ScrollLink>
          </ul>
        </Sidedrawer>
      </div>
      {children}
      <footer className={styles['footer']}>
        <p>© 2022 Envien Studio. All Rights Reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
