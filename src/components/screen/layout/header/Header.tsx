import React, { FC } from 'react';
import Link from '../../../../../node_modules/next/link';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About Page</Link>
    </header>
  );
};

export default Header;
