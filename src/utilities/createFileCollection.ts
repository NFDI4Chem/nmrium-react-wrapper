import { FileCollection, FileCollectionItem } from 'filelist-utils';
import {
  maybeFilter,
  FilterOptions,
} from 'filelist-utils/lib/utilities/maybeFilter';
import { maybeExpand } from 'filelist-utils/lib/utilities/maybeExpand';
import { ExpandOptions } from 'filelist-utils/lib/ExpandOptions';

export async function createFileCollectionFromFiles(
  files: File[],
  options: FilterOptions & ExpandOptions = {},
) {
  let fileCollections: FileCollectionItem[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const data: FileCollectionItem = {
      name: file.name,
      size: file.size,
      arrayBuffer: () => file.arrayBuffer(),
      relativePath: file.webkitRelativePath || file.name,
      lastModified: Date.now(),
      stream: () => file.stream(),
      text: () => file.text(),
    };

    fileCollections.push(data);
  }

  fileCollections = await maybeExpand(fileCollections, options);
  fileCollections = await maybeFilter(fileCollections, options);

  return new FileCollection(fileCollections);
}
