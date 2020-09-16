const setUnique = (array) => {
  let returnArray = []

  for(const element of array) {
    returnArray = callback(returnArray, element)
  }

  return returnArray
}

const callback = (returnArray, element, i = 1) => {
  if(returnArray.includes(element)) {
    if(returnArray.includes(`${element}${i}`)) {
      callback(returnArray, element , i + 1)
    } else {
      returnArray.push(`${element}${i}`)
    }
  } else {
    returnArray.push(element)
  }

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
]


console.log(setUnique(array));