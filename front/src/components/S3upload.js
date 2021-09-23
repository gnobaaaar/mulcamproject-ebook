import React, {useState} from 'react';
import { uploadFile } from 'react-s3';

const S3_BUCKET = 'msa-b-4';
const DirName = 'pic';
const REGION = 'ap-northeast-2';
const accessKeyId = 'AKIA5VZTIAOJZQIKV5B6';
const secretAccessKey = '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';

const config = {
  bucketName: S3_BUCKET,
  dirName: DirName,
  region: REGION,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
};

let picUrl = '';

const S3upload = (picinfo) => {
  uploadFile(picinfo, config)
    .then(data => picUrl = data.location)
    .catch(err => console.error(err));
  return picUrl;
};

export default S3upload;
