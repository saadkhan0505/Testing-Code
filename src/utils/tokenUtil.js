import crypto from 'crypto-browserify';
import { Buffer } from 'buffer';

const algorithm = "aes-256-cbc";
const hexString = "f73fc2f4e03cae09cad941157211b9a91759cbf48bd09b3a041f9ff3a24c3404";
const Securitykey = Buffer.from(hexString, "hex");

const decryptionAlgo = (et) => {
  const { initVectorHex, encryptedData } = et;
  // console.log('it runs')
  const initVector = Buffer.from(initVectorHex, "hex");
  // console.log('initVector>>>>',initVector)

  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  // console.log('decipher>>>>',decipher)
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf-8");
  decryptedData = JSON.parse(decryptedData);
  // console.log('decryptedData>>>>',decryptedData)
  return decryptedData;
}

const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedData = JSON.parse(atob(base64));
      // console.log("dec",decodedData)
      const realdecodedData  = decryptionAlgo(decodedData);
      // console.log("real",realdecodedData)
      return realdecodedData;
    } catch (error) {
      // console.error('Error decoding token:', error);
      return null;
    }
  };

export {decodeToken};