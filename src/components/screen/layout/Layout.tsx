import React, { FC } from 'react';
import dynamic from '../../../../node_modules/next/dynamic';
import Header from './header/Header';
import Footer from './footer/Footer';

// const DynamicFooter = dynamic(() => import('./Footer  '), {
//   ssr: false,
// });

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
