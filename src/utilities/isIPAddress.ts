export function isIPAddress(ip: string) {
  return /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/.test(ip);
}
