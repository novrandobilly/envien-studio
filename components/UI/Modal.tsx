import { FC, Fragment } from 'react';
import styles from './Modal.module.scss';

const Backdrop: FC<{ onCancel: () => void }> = ({ onCancel }) => {
  return <div className={styles['backdrop']} onClick={onCancel}></div>;
};

const ModalOverlay: FC = ({ children }) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

const Modal: FC<{ onCancel: () => void }> = ({ children, onCancel }) => {
  return (
    <Fragment>
      <Backdrop onCancel={onCancel} />
      <ModalOverlay>{children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
