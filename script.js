import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 22px)'
titanic.style.gridGap = '1px'

data.sort((a, b) => {
  if (a.fields.sex > b.fields.sex) {
    return 1
  }
  if (a.fields.sex < b.fields.sex) {
    return -1
  }
  return 0
})

data.sort((a, b) => {
  if (a.fields.survived > b.fields.survived) {
    return 1
  }
  if (a.fields.survived < b.fields.survived) {
    return -1
  }
  return 0
})

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { age, sex, survived } = data[i].fields
  p.style.width = '20px'
  p.style.height = '20px'
  p.style.border = 'solid 1px transparent'

  // survived
  p.style.opacity = survived === 'Yes' ? '100%' : '50%'

  // sex
  p.style.backgroundColor = sex === 'female' ? 'crimson' : 'dodgerblue'
  p.style.borderRadius = sex === 'female' ? '50%' : '0%'

  // age
  if (age >= 70) {
    p.style.border = '1px solid'
    p.style.backgroundColor = 'gold'
  }

  if (age < 25) {
    p.style.width = '15px'
    p.style.height = '15px'
    p.style.backgroundColor = 'purple'
  }

  if (age < 13) {
    p.style.width = '10px'
    p.style.height = '10px'
    p.style.backgroundColor = 'gold'
  }
})
