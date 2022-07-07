import { File } from '../hooks/useLoadSpectra';
import { getFileNameFromURL } from './getFileNameFromURL';

export function loadFilesFromURLs(urls: string[]): Promise<File[]> {
  const fetches = urls.map((url) =>
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        return {
          data,
          name: getFileNameFromURL(url),
        };
      }),
  );

  return Promise.all(fetches);
}
