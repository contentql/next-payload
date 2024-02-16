import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { assignUserId } from '../hooks/assignUserId';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'project_id',
  },
  fields: [
    { name: 'project_id', label: 'Project Id', type: 'text' },
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
    delete: isAdminOrSelf,
  },
};

export default Projects;
