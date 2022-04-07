import * as fs from "fs";
import * as jose from "jose";
const pkcs8 = `${fs.readFileSync("./keys/private.pem", "utf8")}`;
const spki = `${fs.readFileSync("./keys/public.pem", "utf8")}`;

module.exports.privateKey = async () => {
    return await jose.importPKCS8(pkcs8, "RS256");
}

module.exports.publicKey = async () => {
    return await jose.importSPKI(spki, "RS256");
}

