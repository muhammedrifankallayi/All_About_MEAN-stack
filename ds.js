


// function dateFormate(date){


// const separated = date.split(" ")

// const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// var day = separated[0]
// var month = separated[1]
// var year = parseInt(separated[2])
// var dayDate = ''
// let  j = 0
// while(day[j]!='t'){
//     dayDate = dayDate+day[j]
//     j++
// }

// for(let i = 0 ;i<months.length ;i++){
//     if(month===months[i]){
//         if(i>=9){
//             month = i+1
//         }else{
            
//             month = '0' + (i+1)
//             break

//         }
      
//        break;
//     }
// }

// if(year>1900 && year<2100){
//    year = year
// }else{
//     year = null
// }

// if(dayDate.length===1){
//     dayDate = '0'+dayDate
// }


// return year+'-'+month+'-'+dayDate





// }




//  const date =  dateFormate("20th Oct 2052")
//  console.log(date);



// const getValue = (n) => {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     if (n % 2) {
//         console.log(n ,'moded');
//         const newNumber = (n - 1)/2;
//         return getValue(newNumber) + getValue(newNumber + 1);
//     } else {
//         console.log(n,"not");
//         return getValue(n/2);
//     }
//  }
// var getMaximumGenerated = function(n) {
//     let output = 0;

//     for (let i = 1; i <= n; i++) {
//         output = Math.max(output, getValue(i))
      
//     }

//     return output;
// }

// const v = getMaximumGenerated(9)
// console.log(v , "answer");



// const arr = ['a','b','e','b','g','e','a','c','b','a']


// const arr2 = ['abc','cba','kib','cvb','jad','haad']
// let count = 1 
// let obj ={}
// for(let i = 0 ; i< arr.length ; i++){
  
//   for(let j = 0 ; j<arr.length ; j++){
//     if(arr[i]===arr[j] &&  j!=i){
//         count = count+1
//         arr[j]= null
//     }
//   }
 
//   if(arr[i]!==null){
//     obj[arr[i]]=count ;
    
//   }
//   count = 1
// }

// console.log(obj);


// var str = "   fly me   to   the moon  "
// const n = str.split(" ")



// console.log(word.length);


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class List{
    constructor(){
        this.head = null
        this.size = 0
    }


    add(val){
        const node  = new Node(val)
        if(this.head===null){
this.head = node 
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node 
          
        }
        this.size++
    
    }

display(){
    let curr = this.head
while(curr){
    console.log(curr.value);
    curr = curr.next
}

}

recursion(node){
    if(node==null){
        return
    }

    this.recursion(node.next)
    console.log(node.value)
}


}

const obj  =  new List()

obj.add(1)
obj.add(2)
obj.add(3)
obj.add(4)
obj.add(5)

// obj.recursion(obj.head)

