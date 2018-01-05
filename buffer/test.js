/*
* some examples and solutions  i come across
* for more detail api document , refer to https://nodejs.org/api/
* */

//error:Buffer.contact:ypeError: "list" argument must be an Array of Buffer or Uint8Array instances
//reason:new Buffer(0xE1) deprecated , you are supported to use Buffer.alloc(1,[0xE1])
function test1(){
    var old_b = new Buffer([0xE2]);
    var old_b_1 = new Buffer(0xE2);//this is wrong expression , no this useage , params cannot be number
    var new_b = Buffer.from([0xE2]);
    console.log(old_b);//<Buffer e2>
    console.log(old_b_1);//<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
    console.log(new_b);//<Buffer e2>

    var con = Buffer.concat([old_b,new_b]);
    console.log(con);

    var b1 = new Buffer("  ");//<Buffer 20 20>
    var b2 = Buffer.alloc(2,"a");
    console.log(b1);//<Buffer 20 20>
    console.log(b2);//<Buffer 61 61>

    var b3 = new Buffer([0x4B,0x66]);
    var b4 = Buffer.from([0x4B,0x66]);//generate buffer form array -->from
    var b5 = Buffer.alloc(2,0x11);//inital -->alloc
    var b6 = Buffer.alloc(2,[0x4B,0x66]);
    console.log(b3);//<Buffer 4b 66>
    console.log(b4);//<Buffer 4b 66>
    console.log(b5);//<Buffer 11 11>
    console.log(b6);//<Buffer 00 00>
}
//test1();

//int to buffer
function test2(){
    var len_buf = Buffer.alloc(2);
    len_buf.writeUInt16BE(100,0,2);
    var int_len = len_buf.readUInt16BE(0,2);
    console.log(len_buf);
    console.log(int_len);
}
test2();

//equals
function test3(){
    var b1 = Buffer.alloc(1,0x7d);
    var b2 = Buffer.alloc(1,0x7D);
    var is_equal = b1.equals(b2);
    console.log(is_equal);//true
};
//test3();


