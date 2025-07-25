
let arr1=[12,34,"abc"];
arr1.key=12;
console.log(arr1.length);

let arr=new Array(1,2,3,4);
// for(var i=0;i<arr.length;i++)
//   console.log(arr[i]);

// arr.forEach((x)=>{
//     console.log(x);
// })  

let v=arr.every((x)=>{
    return x<3
})
console.log(v);

for(let x of arr)
  console.log(x);

for(let x in arr)
  console.log(x);

  var pp=[...arr];
  console.log(pp);
  
  var mp=arr.map(el=>el)
    console.log(mp);
  
 
 arr.length;
 arr.push();
 arr.pop();
 arr.shift();
 arr.unshift();
 arr.splice();
 
//  ****************Object******************************
 var student={};
 var obj=new Object();
 
 student.num=12;
 student.name="karan";
 student.marks=24;
 delete student.marks;

for(let x in student)
  console.log(x);  

  
  var raj={...student}
  console.log(raj);
  var Virat=Object.assign({},raj);
    console.log(Virat);
 
 console.log(Object.keys(student)) 
 console.log(Object.getOwnPropertyNames(student)) 
  
//  ************String******************************
  let str="abcd-fjd"
  let parts=str.split('-');
  console.log(parts);
  
