const arr = [10,9,8,6,54,3,2]


function quicksort(arr){

if(arr.length<1){
  return arr
}

const piv= arr[0]
var right  = []
var left = []

let i = 1
while(i<arr.length){

if(arr[i]>=piv){
right.push(arr[i])
}else{
  left.push(arr[i])
}
i++

}

return [...quicksort(left),piv,...quicksort(right)]

}



const sorted = quicksort(arr)

const d = diffrenciate(arr)
console.log(d,"llloop");



function diffrenciate(arr){

  if(arr.length<=1){
    return arr
  }

const mid = Math.floor(arr.length/2)
const left = arr.slice(0,mid)
const right = arr.slice(mid)

const leftArr = diffrenciate(left)
const rightArr = diffrenciate(right)

return Mergesort(leftArr,rightArr)

}
function Mergesort(left,right){

var result = []
var Lindex = 0
var Rindex = 0

while(Lindex<left.length&&Rindex<right.length){

  if(left[Lindex]>right[Rindex]){
    result.push(right[Rindex])
    Rindex++
  }else{
    result.push(left[Lindex])
    Lindex++
  }

}
console.log(result);
return result.concat(left.slice(Lindex), right.slice(Rindex));

}




// for(let i = 0 ;i<arr.length;i++){

//    let min = i

//    for(let x=i+1;x<arr.length;x++){

//      if(arr[x]<arr[min]){
//       min = x
//      }

//    }

//    let mango = arr[i]
//    arr[i]  = arr[min]
//    arr[min] = mango
// }

// for(let i=1;i<arr.length;i++){

//     let curr = arr[i]
//     let j = i-1

//     while(j>=0&&arr[j]>curr){
//       arr[j+1] = arr[j]
//       j--
//     }
//     arr[j+1] = curr
// }

// console.log(arr,"insertion");