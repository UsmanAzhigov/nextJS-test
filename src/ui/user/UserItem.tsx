import { IusersDataOne } from '@/interfaces/users.interFace';
import React, { FC } from 'react';
import Link from '../../../node_modules/next/link';

const UserItem: FC<IusersDataOne> = ({ user }) => {
  return (
    <div>
      {user.name}
      <Link href={`/user/${user.id}`}>Read more</Link>
    </div>
  );
};
export default UserItem;
