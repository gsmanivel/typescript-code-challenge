function typeAliasDemo(user) {
    console.log(user.name, "---", user.age);
}
function withoutTypeAlias(user) {
    console.log(user.name);
}
typeAliasDemo({ name: "mani", age: 22 });
withoutTypeAlias({ name: "mani", age: 22 });
// AlgoExpert - Solution # 1
function solution1(array, targetSum) {
    for (var i = 0; i < array.length; i++) {
        var firstNum = array[i];
        for (var j = i + 1; j < array.length; j++) {
            var secondNum = array[j];
            var total = firstNum + secondNum;
            if (total == targetSum)
                return [firstNum, secondNum];
        }
    }
    return [];
}
// AlgoExpert - Solution # 2
function solution2(array, targetSum) {
    var nums = {};
    for (var i = 0; i < array.length; i++) {
        var currentNum = array[i];
        var potentialTarget = targetSum - currentNum;
        if (potentialTarget in nums)
            return [currentNum, potentialTarget];
        else
            nums[currentNum] = true;
    }
    return [];
}
// AlgoExpert - Solution # 3
function solution3(array, targetSum) {
    array.sort(function (n1, n2) { return n1 - n2; });
    console.log(array);
    var len = array.length;
    var start = 0;
    var end = len - 1;
    while (start < end) {
        var currentSum = array[start] + array[end];
        console.log(currentSum);
        if (currentSum == targetSum)
            return [array[start], array[end]];
        else if (currentSum > targetSum) {
            console.log("Inside else");
            end--;
        }
        else
            start++;
    }
    return [];
}
var array1 = [3, 5, -4, 8, 10, 1, -1, 6, 7]; // result = [3,7]
var array2 = [5, 5, -4, 8, 10, 1, -1, 6, 7]; // result = [5,5]
var array3 = [3, 5, -4, 8, 11, 1, -1, 6]; // result = [11,-1]
var array4 = [3, 11, -4, -1, 5, 1, 8, 6]; // result = [11,-1]
var array5 = [];
var targetSum = 10;
console.log(solution3(array4, targetSum));
