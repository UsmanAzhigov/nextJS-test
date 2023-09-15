import Home from '.././components/screen/Home';
import { IusersData } from '@/interfaces/users.interFace';

import React, { FC } from 'react';
import { UsersService } from '@/ApiService/users.service';

const HomePage: FC<IusersData> = ({ users }) => {
  return <Home users={users} />;
};
export const getStaticProps = async () => {
  const users = await UsersService.getAllUsers();

  return {
    props: {
      data: users,
    },
  };
};

export default HomePage;
