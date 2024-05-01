import fs from "fs";
import path from 'path';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8'); // throw(err) ???
const getFileType = (filepath) => filepath.split('.').at(-1);
const parseFile = (data, type) => {
  switch(type.toLowerCase()) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return 'yaml';
    default:
      throw new Error(`${type} is not supported. Only JSON, yaml and yml.`);
  }
};

const gendiff = (filepath1, filepath2) => parseFile(readFile(filepath1), getFileType(filepath1)).proxy;

export default gendiff;
