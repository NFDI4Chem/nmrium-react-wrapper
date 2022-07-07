// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArrayOfFile(data: any[]) {
  return data.every(
    (file) => file?.data !== undefined && file?.name !== undefined,
  );
}
