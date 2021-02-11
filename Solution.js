const lengthOfLongestSubstring = (s) => {
    //create two pointers to make a window for the longest substring
    //both which start at the beginning of the string
    let left = 0; 
    let right = 0; 
    let length = s.length;
    //since the problem asks for no repeating characters in the substring
    //a set would help since it doesn't allow for duplicates
    let set = new Set(); 
    //create a variable to keep track of the length of the substring to return
    let longest = 0; 
    //if the string is empty return nothing
    if(!length) {
        return 0; 
    }
    //loop through the string until the right pointer reaches the end of the string
    while (right < length) {
        if (!set.has(s.charAt(right))) { //if the set doesn't contain the character at the index 'right', add to set
            set.add(s.charAt(right));
            longest = Math.max(longest, set.size); //compare the size of longest and the set size and get the max
            right++; //increment the right pointer
        } else { //if the set already contains the character at index 'right', delete the character at left
            set.delete(s.charAt(left)); 
            left++; //increment left
        }
    }
    return longest; 
}
