// Array 생성자 함수
const a = new Array(5).map((_, i) => i + 1); // []
const b = [...new Array(5)]; // [undefined, undefined, undefined, undefined, undefined]
const c = [...new Array(5)].map((_, i) => i + 1); // [1, 2, 3, 4, 5]

// Array.from 메서드에 length 프로퍼티만 가진 유사 배열 객체를 전달하면
// 해당 길이 만큼의 undefined를 요소로 갖는 배열을 반환한다.
const d = Array.from({length: 5}); // [undefined, undefined, undefined, undefined, undefined]
const e = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]
