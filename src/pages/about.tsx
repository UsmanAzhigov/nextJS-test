import Layout from '@/components/screen/layout/Layout';
import React, { FC } from 'react';
import Link from '../../node_modules/next/link';

const About: FC = () => {
  return (
    <Layout>
      <Link href="/">
        <button> Back</button>
      </Link>
      About
    </Layout>
  );
};

export default About;
