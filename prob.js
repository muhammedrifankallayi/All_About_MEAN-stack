const arr = [10,9,8,6,54,3,2]



for(let i = 0 ;i<arr.length;i++){

   let min = i

   for(let x=i+1;x<arr.length;x++){

     if(arr[x]<arr[min]){
      min = x
     }

   }

   let mango = arr[i]
   arr[i]  = arr[min]
   arr[min] = mango
}

for(let i=1;i<arr.length;i++){

    let curr = arr[i]
    let j = i-1

    while(j>=0&&arr[j]>curr){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = curr
}

console.log(arr,"insertion");