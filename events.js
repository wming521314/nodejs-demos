var EventEmitter = require('events').EventEmitter

var listener = new EventEmitter()
listener.setMaxListeners(20) //设置监听事件的最大数量

function hello(who){
    console.log('hello , i am ' + who)
}
function hi(who){
    console.log('hi , i am ' + who)
}

listener.on('help',function(who){
    console.log(who + ' , i am coming , dont worry')
})
listener.on('hello',hello)
listener.on('hello',hi)

console.log(listener.listeners('hello').length)
listener.removeListener('hello',hello)
var ret1 = listener.emit('help','robin') //if is listened , return true , otherwise return false
console.log(ret1)
var ret2 = listener.emit('hello','robin')
console.log(ret2)
console.log(listener.listeners('hello').length)

listener.removeAllListeners('help')
console.log(listener.listeners('help').length)
