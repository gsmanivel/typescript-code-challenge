type User = { name: string; age: number };
function typeAliasDemo(user: User) {
  console.log(user.name, "---", user.age);
}

function withoutTypeAlias(user: { name: string; age: number }) {
  console.log(user.name);
}

typeAliasDemo({ name: "mani", age: 22 });
withoutTypeAlias({ name: "mani", age: 22 });

// AlgoExpert - Solution # 1
function solution1(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      let total = firstNum + secondNum;
      if (total == targetSum) return [firstNum, secondNum];
    }
  }
  return [];
}

// AlgoExpert - Solution # 2
function solution2(array: number[], targetSum: number) {
    let nums = {}
    for(let i=0;i<array.length;i++){
        let currentNum = array[i]
        let potentialTarget = targetSum-currentNum
        if(potentialTarget in nums)
            return [currentNum,potentialTarget]
        else
            nums[currentNum] = true
    }
    return []
}

// AlgoExpert - Solution # 3
function solution3(array: number[], targetSum: number) {
    
    array.sort((n1,n2) => n1 - n2);
    console.log(array)
    let len = array.length
    let start = 0
    let end  = len-1
    while(start < end){
        let currentSum = array[start] + array[end]
        console.log(currentSum)
        if(currentSum == targetSum)
            return [array[start] , array[end]]
        else if (currentSum > targetSum){
            console.log("Inside else")
            end--
        }
        else
            start++
    }
    return []
}

let array1 = [3, 5, -4, 8, 10, 1, -1, 6, 7]  // result = [3,7]
let array2 = [5, 5, -4, 8, 10, 1, -1, 6, 7]  // result = [5,5]
let array3 = [3, 5, -4, 8, 11, 1, -1, 6]     // result = [11,-1]
let array4 = [3, 11, -4, -1, 5, 1, 8, 6]     // result = [11,-1]
let array5 = []
let targetSum = 10;
console.log(solution3(array4, targetSum));
