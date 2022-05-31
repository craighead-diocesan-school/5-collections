// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
]

function addSubject() {
  let newSubject = 'Maths'

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)

  alert(subjects)
}

function removeSubject() {
  let index = 0

  // remove 1 subject at the index position of the subjects array
  subjects.splice(index, 1)

  alert(subjects)
}