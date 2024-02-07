import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { isAdmin } from '../access/isAdmin';
import { assignUserId } from '../hooks/assignUserId';

const Todos: CollectionConfig = {
  slug: 'todos',
  admin: {
    useAsTitle: 'task',
  },
  fields: [
    { name: 'task', label: 'Task', type: 'text' },
    {
      name: 'completed',
      label: 'Completed',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'user_id',
      label: 'User',
      type: 'relationship',
      relationTo: ['users'],
      hasMany: false,
      hooks: {
        beforeChange: [assignUserId],
      },
    },
  ],
  access: {
    read: isAdminOrSelf,
    create: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
};

export default Todos;
