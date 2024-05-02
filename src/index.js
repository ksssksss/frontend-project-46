// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { parseFile, readFile, getFileType } from './file-utils.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(readFile(filepath1), getFileType(filepath1));
  const file2 = parseFile(readFile(filepath2), getFileType(filepath2));
  const keys = _.union(Object.keys(file1), Object.keys(file2)).sort();
  const result = keys.map((key) => {
    if (!Object.hasOwn(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    }
    if (!Object.hasOwn(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    }
    if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      if (file1[key] === file2[key]) {
        return `    ${key}: ${file1[key]}`;
      }
      return [`  - ${key}: ${file1[key]}`, `  + ${key}: ${file2[key]}`];
    }
    return key;
  });

  return `{\n${_.flatMapDeep(result).join(',\n')}\n}`;
};

export default genDiff;
