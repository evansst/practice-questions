const isPermutation = (string1, string2) => {
  string1 = string1.split('').sort().join()
  string2 = string2.split('').sort().join()

  return (string1 === string2)
}

string1 = 'desserts'
string2 = 'stressed'

console.log(isPermutation(string1, string2))