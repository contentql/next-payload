import { FieldHook } from 'payload/types';

// use this hook, only when we have a relationship with the users table
export const assignUserId: FieldHook = async ({ req, operation, data }) => {
  if (operation === 'create' && !data.user_id) {
    data.user_id = { value: req.user.id, relationTo: 'users' };
  }
};
