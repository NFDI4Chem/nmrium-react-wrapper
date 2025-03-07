 
export function isArrayOfString(data: any[]) {
  return data.every((url) => typeof url === 'string');
}
