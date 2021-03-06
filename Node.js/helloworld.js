// 테스트 예제
//  - console 전역객체 사용법
//  - JavaScript Object 객체 사용 및 객체 console 출력

console.log("node.js를 시작합니다.")
console.log('문자열 출력 = %s', 'abcdef');
console.log('숫자 출력 = %d', 1234);

// JavaScript Object
var person = {
    name:'RaynerJo',
    age:45
};

// console 자바스크립트 객체 로그 출력
console.log( '자바스크립트 객체입니다. %j', person );

// console 객체 로그
console.dir( person );

// 전역객체 : console
// console.time & console.timeend
console.time('duration_time')

var result = 0;
for(var i = 1; i < 10000; i++) {
    result += i;
}

console.timeEnd('duration_time');

// 전역변수 : __filename, __dirname
console.log('전역변수 파일이름 = ' + __filename);
console.log('전역변수 디렉토리 이름 = ' + __dirname);

// 전역객체 : process, 전역변수 : 
console.log('argv 속성의 파라미터 수 = ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(element => {
    console.log(`element = ` + element);
});

process.argv.forEach(function(item, index){
    console.log(index + ' : ' + item)
});