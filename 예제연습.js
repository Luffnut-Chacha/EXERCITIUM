let array = [2, 6, 3, 1, 5, 9];
for (let i = 0; i < array.length; i += 1) {
  console.log(`${i}번째 아이템 =` , array[i]);
}

let array1 = [1, 3, 5, 7, 5, 3, 1];
for (let j=0; j <= array1.length ; j += 1) {
  console.log(`${j}th index = `, array1[j-1]);
}
// 0th index를 표시 안 하는 방법은 없나요? (표기시작을 1st index에서 시작)

let array = [2, 4, 6, 8, 10];
let i = 0;
for (const item of array) {
  console.log(`${i}번째 아이템 = `, item);
  i += 1;
}

let array1 = ["ㅡ", "*", " "];
let j = 0;
for  ( const code of array1 ) {
  console.log( `${j} means = , code) 
}
//얘는 왜 unexpected input이라고 뜰까여..?
