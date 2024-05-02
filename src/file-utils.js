import fs from 'fs';
import path from 'path';

export const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);

export const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8'); // throw(err) ???

export const getFileType = (filepath) => filepath.split('.').at(-1);

export const parseFile = (data, type) => {
  switch (type.toLowerCase()) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return 'yaml';
    default:
      throw new Error(`${type} is not supported. Only JSON, yaml and yml.`);
  }
};
