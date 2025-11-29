let grade = Number(prompt("enter the value"));
if(grade > 100){
    console.log("invalid")
} 
// else if(grade > 90){
//     console.log("A1");
// }
// else if(grade > 80){
//     console.log("A");
// }
// else if(grade > 70){
//     console.log("b");
// }
// else if(grade > 60){
//     console.log("c");
// }
// else if(grade > 50){
//     console.log("d");
// }
// else{
//     console.log("fail");
// }


// let ch = Number(prompt("enter the value"))

// switch (ch){
//     case 1:
//         console.log("red")
//     break
//     case 2:
//         console.log("green")
//         break
//     case 3:
//         console.log("yellow")
//         break
//         default:
//             console.log("invalid")
//             break;    

// }



// let color = prompt("enter the color")

// switch (color){
//     case 'red':
//         console.log("stop")
//         break
//         case 'yellow':
//             console.log("get ready to stop")
//         break
//         case 'green':
//             console.log("go")
//             break
//             default:
//                 console.log("invalid")
//                 break;    
// }



// let num1 = Number(prompt("enter the value1"))
// let opr = (prompt("enter the operator"))
// let num2 = Number(prompt("enter the value2"))

// switch (opr){
//     case '+':
//         console.log(num1 + num2)
//         break
        
//     case '-':
//         console.log(num1 - num2)
//         break
        
//     case '*':
//         console.log(num1 * num2)
//         break
        
//     case '/':
//         console.log(num1 / num2)
//         break
//         default:
//             console.log("invalid input")
//             break;
// }




//for loop

// for(let i = 1; i<=10; i++){
//     console.log("2 x",i,"=",i*2)
// }



// for(let i = 1; i<=100; i++){
//     if(i%5==0){
//         continue;
//     }
//     console.log(i)
// }


//nested loop


// for(let r =1; r<=5; r++){
//     for(let i=1; i<=5; i++){
//         document.write("*")
//     }
//     document.write("<br>")
// }




// for(let r =1; r<=5; r++){
//     for(let i=1; i<=r; i++){
//         document.write(r)
//     }
//     document.write("<br>")
// }


//while loop



// let i= 1;

// while(i<=10){

//     document.write("*")

//     i++;
// }
// while(true){

// }



//do while



// let i=1;
// do{
//     console.log(i)
//     i++;
// }while(i>=10);


//array
//array ko bht sari value declaare karny ky liye istemal kia jata ha 

// let l = [22,34,3,22,11,22]
// console.log(l)


// let n = [22,34,3,22,11,22]
// console.log(n[1])



// let n = new Array("hello", "world",23,32,12)
// console.log(n[3])



// let l = [22,34,3,[22,11,23,24]]
// console.log(l[3][2])


// let p = [22,10,20,30,88,44,66]
// let t = p.length;

// for(let i = t; i>=0; i--){
//     console.log(i,p[i])

// }



//for of
//ya array ki value ko line by line print karwata ha 

// let p = [23,23,24,4,55,44,66,44,78]

// for(v of p){
//     console.log(v)
// }

// //for in
//ya array ky index ka number batata ha


// for (k in p){
//     console.log(k)
// }



//push method
//push array ky last  mn add krta ha value ko

// let l = [12,23,44,66,32,11,23]

//  l.push(12)

//  console.log(l)


//unshift method
//ya array ky shuru mn add krta ha value

// let l = [12,23,44,66,32,11,23]

// l.unshift(45)

// console.log(l)




//pop method
//pop array ki last value delete karta ha 

// let l = [12,23,44,66,32,11,23]

//  l.pop()

//  console.log(l)


 //shift method

//array ki 1st value delete karta ha


// let l = [12,23,44,66,32,11,23]

//  l.shift()

//  console.log(l)


//to string
//ya array ko string mn convert krta ha 

// let l = ["ibrahim","taif","shahzaib"]

// let data = l.toString()
// console.log(data)



//join data
//ya bhi array ko string mn convert keta ha lkn ya apko oporchunity dyta ha ky ap isky beach mn jo lagana chahy laga ly

// let l = ["ibrahim","taif","shahzaib"]

// let joinData = l.join('|')
// console.log(joinData)



//includes
//ya check krta ha ky jo no apny isy diya ha wo is array mn ha ya nh ?


// let i = [22,44,56,75,86,96,12]

// console.log(i.includes(44))


//concat method
//ya do array ko ek array mn convert karta ha or agar humy do teen array ko concat krna ha to , laga kr krskty ha


// let l = [12,55,33,55,11,45,23]
// let l1 = [12,43,"hello","world"]
// let l2 = [12,43,344,22,22]
// let bothArray = l.concat(l1,l2)

// console.log(bothArray);


//filter data
//ya array ki value ko filter krky kam kr sakta ha


// let l = [12,44,2,15,53,78,90,80]

// let filterData = l.filter((v,i)=>{
//     if(v%2==0){
//         return v;
//     } 
// })
// console.log(filterData)



//dom hamy ya facilities dyta ha ky hum koi bhi id dykr kisi element ko  target krsakty ha



// let heading = document.getElementById('heading')
// console.log(heading.innerText)



// let lock = document.getElementById('pass');
// let btn = document.getElementById('btn');

// function showHidePassword(){

//     if(btn.innerHTML=="Show"){
//         lock.type = "text";
//         btn.innerHTML="hide"
//     }
//     else{
//         lock.type = "password";
//         btn.innerHTML="Show";
//     }
// }


//event lisner 
// ya ek pre define method ha ya event or function dono ko sath mn define kr sakta ha












//calculator



const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}








