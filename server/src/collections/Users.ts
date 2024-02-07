import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'user', value: 'user' },
      ],
      defaultValue: ['user'],
      hasMany: true,
      saveToJWT: true,
      access: {
        update: isAdminFieldLevel,
        create: isAdminFieldLevel,
      },
    },
  ],
};

export default Users;
