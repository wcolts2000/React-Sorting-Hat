const arr = ["2gryffindor", "1hufflepuff", "2slytherin", "1ravenclaw"];
console.log(arr[0].substring(1));
let g = "1", h = "1", s = "2", r = "1"

let newArr = [Number(g), Number(h), Number(s), Number(r)]
let highValue = 0;
let iValue;
let count = 0;
  newArr.map((number, index) => {
    if(number > highValue) {
      highValue = number;
      count = 0
      iValue = index
    }else if (number === highValue && number > 0) {
      count++
      iValue = [iValue, index]
      
      
      
      
    }
    console.log(highValue);
    console.log(count);
    console.log(iValue);
    console.log(index);
    
  }
  
  )
console.log(newArr);

