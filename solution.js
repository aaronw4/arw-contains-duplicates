var containsDuplicate = function(nums) {
    let numbers = nums.sort()
    for (i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i+1]) {
            return true
        }
    }
    return false
};

containsDuplicate([1,2,3,1])