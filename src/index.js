function rotateArr(arr) {
  let temp = arr[arr.length - 1];
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[i] = temp;
  console.log("res==", arr);
}

rotateArr([2, 3, 4, 9, 7]);
