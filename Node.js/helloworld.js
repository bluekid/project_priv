// 전역객체 : console
console.log("node.js를 시작합니다.")

console.log('문자열 출력 = %s', 'abcdef');

console.log('숫자 출력 = %d', 1234);

// JavaScript Object
var person = {
    name:'RaynerJo',
    age:45
};

// 전역객체 : console
// console.log : JavaScript Object
console.log( 'JavaScript Object = %j', person );

console.dir(person);

// 전역객체 : console
// console.time & console.timeend
console.time('time_duration')

var result = 0;
for(var i = 1; i < 10000; i++) {
    result += i;
}

console.timeEnd('time_duration');

// 전역변수 : __filename, __dirname
console.log('전역변수 __filename = ' + __filename);
console.log('전역변수 __dirname = ' + __dirname);

// 전역객체 : process, 전역변수 : 
console.log('argv 파라미터 갯수 = ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(element => {
    console.log(`element = ` + element);
});

process.argv.forEach(function(item, index){
    console.log(index + ' : ' + item)
});