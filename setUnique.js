const setUnique = (array) => {
  let returnArray = []

  for(const element of array) {
    returnArray.includes(element)
      ? returnArray.push(element)
      : unique(returnArray, element)
  }

  return returnArray
}

const unique = (returnArray, element, i = 1) => {
  returnArray.includes(element + i) 
    ? unique(returnArray, element , i + 1)
    : returnArray.push(element + i)

  return returnArray
}


array = [
  "apple",
  "banana",
  "apple",
  "banana",
  "apple",
  "banana",
  "apple",
  "banana",
  "apple",
  "banana",
  "apple",
  "banana",
  "apple",
  "banana",
]


console.log(setUnique(array));