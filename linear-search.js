//O(n)
function linearSearch(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) { 
      return i;
    }
  }
  
  return null;
}