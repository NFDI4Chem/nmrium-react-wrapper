import { getFileNameFromURL } from './getFileNameFromURL.js';

export function loadFilesFromURLs(urls: string[]): Promise<File[]> {
  const fetches = urls.map((url) =>
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        let name = getFileNameFromURL(url);
        const hasExtension = name?.includes('.');
        if (!hasExtension) {
          name = `${name}.zip`;
        }
        return new File([data], name);
      }),
  );

  return Promise.all(fetches);
}
