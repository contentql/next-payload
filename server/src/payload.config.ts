import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import { Media } from './collections/Media';
import Todos from './collections/Todos';
import Users from './collections/Users';
import { s3StorageAdapter } from './config/s3.config';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        util: false,
        os: false,
      };

      return config;
    },
  },
  editor: slateEditor({}),
  collections: [Users, Todos, Media],
  upload: {
    useTempFiles: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        media: {
          adapter: s3StorageAdapter,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_CLIENT_URL,
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_CLIENT_URL,
  ].filter(Boolean),
});
