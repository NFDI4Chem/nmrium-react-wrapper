export function getFileNameFromURL(url: string) {
  return url.substring(url.lastIndexOf('/') + 1);
}
