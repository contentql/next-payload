import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export const minioAdapter = s3Adapter({
  config: {
    endpoint: process.env.MINIO_ENDPOINT,
    region: process.env.MINIO_REGION,
    credentials: {
      accessKeyId: process.env.MINIO_ACCESS_KEY,
      secretAccessKey: process.env.MINIO_SECRET_KEY,
    },
  },
  bucket: process.env.MINIO_BUCKET,
});
