import { generateKeyPair } from "crypto";
import * as fs from "fs";

module.exports = () => {
    generateKeyPair("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    }, (cryptoErr, publicKey, privateKey) => {
        fs.writeFile("./keys/public.pem", publicKey, fsErr => {
            if (fsErr)
                return console.log(fsErr);
        });
        fs.writeFile("./keys/private.pem", privateKey, fsErr => {
            if (fsErr)
                return console.log(fsErr);
        });
    });
};