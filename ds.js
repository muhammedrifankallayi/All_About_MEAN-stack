


function dateFormate(date){


const separated = date.split(" ")

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var day = separated[0]
var month = separated[1]
var year = parseInt(separated[2])
var dayDate = ''
let  j = 0
while(day[j]!='t'){
    dayDate = dayDate+day[j]
    j++
}

for(let i = 0 ;i<months.length ;i++){
    if(month===months[i]){
        if(i>=9){
            month = i+1
        }else{
            
            month = '0' + (i+1)
            break

        }
      
       break;
    }
}

if(year>1900 && year<2100){
   year = year
}else{
    year = null
}

if(dayDate.length===1){
    dayDate = '0'+dayDate
}


return year+'-'+month+'-'+dayDate





}





 const date =  dateFormate("20th Oct 2052")
 console.log(date);