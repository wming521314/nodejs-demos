/*
* examples of cbc and ecb
* 1.key , data can be string , as well as buffer
* 2.key bit number must be consistent with algorithm
* 3.ecb no vi , bu cbc has vi;
* for detail information : https://nodejs.org/api/crypto.html
* */
const crypto = require("crypto")
function aes128EcbEncryption(data, key) {
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipher('aes-128-ecb', key);

    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));

    return cipherChunks.join('');
}

function aes128EcbDecryption(data, key) {
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipher('aes-128-ecb',key);

    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));

    return cipherChunks.join('');
}

function aes128CbcEncryption(data, key) {
    var iv = "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv('aes-128-ecb', key, iv);
    cipher.setAutoPadding(true);

    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));

    return cipherChunks.join('');
}

function aes128CbcDecryption(data, key) {
    var iv = "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-128-ecb', key, iv);
    decipher.setAutoPadding(true);

    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));

    return cipherChunks.join('');
}

var key = Buffer.from("wming345j234l53j");//var key = new Buffer("wming345j234l53j");// all work right and result is consistent

console.log(key);
//var data = "trible6lal";
//var data = "1234567890123"
var data = Buffer.from("123456789012345678901234567890");
var ecb_en = aes128EcbEncryption(data,key);
var ecb_de = aes128EcbDecryption(ecb_en,key);
console.log("aes-128-ecb encryption result: " + ecb_en + ", decryption result: " + ecb_de);

var cbc_en = aes128CbcEncryption(data,key);
var cbc_de = aes128CbcDecryption(cbc_en,key);
console.log("aes-128-cbc encryption result: " + cbc_en + ", decryption result: " + cbc_de);