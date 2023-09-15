import { IusersData } from '@/interfaces/users.interFace';
import UserItem from '@/ui/user/UserItem';
import React, { FC } from 'react';
import Layout from './layout/Layout';

const Home: FC<IusersData> = ({ users }) => {
  return (
    <Layout>
      <h1>Изучаю NEXTJS </h1>
      {/* {'a' === 'a' ? (
        users?.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <div>Users not found</div>
      )} */}
    </Layout>
  );
};

export default Home;
