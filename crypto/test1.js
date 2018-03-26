/*
* 1.Be careful the difference between crypto.createCipher(algorithm, password[, options])
*                                 and crypto.createCipheriv(algorithm, key, iv[, options])
* pay attention to password( it is random , not the final key , nodejs will help you generate the final key )
*              and
*                  key( you must be really sure the key format )
* so if you want define your own key , please use createCipheriv , ranter than createCipher
* http://nodejs.cn/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv_options
*
* 2.Merge Buffer : use Buffer.concat([buf1,buf2]) , rather than buf1+buf2 , otherwise you will get string result
* 3.Please mark type of function params , otherwise exceptions will happen in complicated project .
* */

const crypto = require('crypto');
const session_key = Buffer.from([0x4B,0xD9,0xDE,0x08,0xA5,0xA7,0x49,0xAD,0x81,0x92,0xE0,0x8E,0xDC,0x54,0x24,0xD3]);
function encryptDevId(dev_id_buf){
    //pwd = pwd.toString();//this pwd must be string ,why official doc can be buffer
    //pwd = Buffer.from(pwd);
    var algorithm = 'aes-128-ecb';
    /*
    var inputEncoding = 'utf8';  // utf8/ascii/latin1
    var outputEncoding = 'base64';  // latin1/base64/hex
    //var cipher = crypto.createCipher(algorithm, session_key);
    var cipher = crypto.createCipheriv(algorithm, session_key, "");
    var encrypted = cipher.update(dev_id_buf, inputEncoding, outputEncoding);
    encrypted += cipher.final(outputEncoding);  // latin1/base64/hex
    */

    var cipher = crypto.createCipheriv(algorithm, session_key, "");
    var encrypted = cipher.update(dev_id_buf);
    encrypted = Buffer.concat([encrypted,cipher.final()]);  // latin1/base64/hex*/
    return encrypted;
}

function decryptDevId(pwd_buf){
    var algorithm = 'aes-128-ecb';
    /*
    var inputEncoding = 'base64';  //  latin1/base64/hex
    var outputEncoding = 'utf8';   // utf8/ascii/latin1
    const decipher = crypto.createDecipheriv(algorithm,session_key, "");
    //const decipher = crypto.createDecipher(algorithm,session_key);
    var decrypted = decipher.update(pwd_buf, inputEncoding, outputEncoding);
    decrypted += decipher.final(outputEncoding);  // latin1/ascii/utf8'
    */

    const decipher = crypto.createDecipheriv(algorithm,session_key, "");
    var decrypted = decipher.update(pwd_buf);
    decrypted = Buffer.concat([decrypted,decipher.final()]);
    return decrypted;
};

var data_str = "d2a393af10d54dc7";
var data_buf = Buffer.from(data_str);
var pwd = encryptDevId(data_buf);
console.log(pwd.length);//44
console.log(pwd);//tR7MS6/pxgYPNbFf0xyTvpcpybqwZjuokn+2h8CvQpo=
console.log(Buffer.from(pwd));  //JAUv+ChWAd6gFu615o6+7A==
var dev_id = decryptDevId(pwd);
console.log(dev_id);
console.log(dev_id==data_str);


