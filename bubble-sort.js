function bubbleSort(arr) {
  var i, j;

  var isSwapped = false;

  for (i = 0; i < arr.length; i++) {

    isSwapped = false;

    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  console.log(arr)
}