import { FC } from 'react';
import styles from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
