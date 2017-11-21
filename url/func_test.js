url = require('url')

url_test1 = 'https://zhuanlan.zhihu.com/p/24308524'
console.log(url.parse(url_test1))
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'zhuanlan.zhihu.com',
  port: null,
  hostname: 'zhuanlan.zhihu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/p/24308524',
  path: '/p/24308524',
  href: 'https://zhuanlan.zhihu.com/p/24308524' }
* */

url_test2 = 'https://zhuanlan.zhihu.com:8080/p/24308524?name=robin&sex=male#block1'
console.log(url.parse(url_test2))
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'zhuanlan.zhihu.com:8080',
  port: '8080',
  hostname: 'zhuanlan.zhihu.com',
  hash: null,
  search: '?name=robin&sex=male',
  query: 'name=robin&sex=male',
  pathname: '/p/24308524',
  path: '/p/24308524?name=robin&sex=male',
  href: 'https://zhuanlan.zhihu.com:8080/p/24308524?name=robin&sex=male' }
* */
console.log(url.parse(url_test2,true))
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'zhuanlan.zhihu.com:8080',
  port: '8080',
  hostname: 'zhuanlan.zhihu.com',
  hash: '#block1',
  search: '?name=robin&sex=male',
  query: { name: 'robin', sex: 'male' },
  pathname: '/p/24308524',
  path: '/p/24308524?name=robin&sex=male',
  href: 'https://zhuanlan.zhihu.com:8080/p/24308524?name=robin&sex=male#block1' }
* */
//protocol is not known
console.log(url.parse('//zhuanlan.zhihu.com:8080/p/24308524?name=robin&sex=male#block1',true,true))

url_test3 = url.parse(url_test2)
console.log(url.format(url_test3))
//https://zhuanlan.zhihu.com:8080/p/24308524?name=robin&sex=male

console.log(url.resolve('https://zhuanlan.zhihu.com:8080','/p/24308524?name=robin&sex=male'))