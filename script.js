import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 22px)'
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { pclass, sex, survived } = data[i].fields
  p.style.width = '20px'
  p.style.height = '20px'
  p.style.border = 'solid 1px transparent'

  // survived
  p.style.opacity = survived === 'Yes' ? '100%' : '50%'

  // sex
  p.style.backgroundColor = sex === 'female' ? 'lightpink' : 'cornflowerblue'
  p.style.borderRadius = sex === 'female' ? '50%' : '0%'

  // pclass
  // if (pclass === 1) {
  //   p.style.border = 'solid 1px black'
  // }
})
