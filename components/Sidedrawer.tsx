import { FC } from 'react';
import styles from './Sidedrawer.module.scss';
import { CSSTransition } from 'react-transition-group';

const Sidedrawer: FC<{ show: boolean; onCancel: () => void }> = ({ children, show, onCancel }) => {
  return (
    <CSSTransition in={show} timeout={400} classNames='slide-in-left' mountOnEnter unmountOnExit>
      <aside className={styles['sidedrawer']} onClick={onCancel}>
        {children}
      </aside>
    </CSSTransition>
  );
};

export default Sidedrawer;
