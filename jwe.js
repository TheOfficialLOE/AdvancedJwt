import * as jose from "jose";
import { privateKey } from "./key-object-gen.js";

export const enc = async (payload) => {

  return await new jose.CompactEncrypt(
      new TextEncoder().encode(
          payload
      )
  )
      .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
      .encrypt(await privateKey());

};