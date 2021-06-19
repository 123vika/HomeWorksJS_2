// const os = require('os');
// const moment = require('moment');
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
// console.log(moment());
// const fs = require('fs');
// const users = [{name: 'Ann', age: 20}];
// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {console.log(err);}
//     else {console.log('Ok!');}
// });
// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) { console.log(err);}   
//     else {
//         const list = JSON.parse(data);
//         list.push({name: 'Vasya', age: 30});
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//         if (err) {console.log(err);}
//         else {console.log('Ok!'); }
//         });    
//     }   
//  });            
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
//         res.write('Hello world!');
//         // console.log('Ok!');
//         res.end();
//     }
//     if (req.url === '/api/users'){
//         fs.readFile('db.json', 'utf-8', (err, data) => {
//             if(err) {
//                 res.write('Ошибка');
//                 res.end();
//             }else{
//                 res.write(data);
//                 res.end(); 
//             }
//         });
//     }
// });
// server.listen(3000);
// server.on('connection', (socket) => {
//     console.log('New connection!');
// });
