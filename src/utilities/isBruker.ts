import { JSZipObject } from 'jszip';

type ZipFiles = { [key: string]: JSZipObject };

export function isBruker(files: ZipFiles) {
  return Object.keys(files).some((path) =>
    ['2rr', 'fid', '1r'].some((brukerFile) => path.endsWith(brukerFile)),
  );
}
