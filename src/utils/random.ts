import sha256 from 'crypto-js/sha256';

export const randomIndexWithSalt = (salt: string, arr: unknown[]) => {
  const hash = sha256(new Date().toLocaleDateString() + salt).toString().slice(-10)
  return parseInt(hash, 26) % arr.length
}