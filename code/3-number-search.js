// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 1
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  })

  alert(searchTarget + ' found: ' + searchResult)
}