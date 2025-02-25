import { saveCourses } from "./general.js";

let courses = [];

let courseName
let note

saveCourses()

function getFromStorage () {
  let allSavedCourses = JSON.parse(localStorage.getItem('flash-courses'))
  if (allSavedCourses) {
    courses = allSavedCourses
  }
  return courses
}

document.querySelector('.js-add1').addEventListener('click', () => {
    courseName = document.querySelector('#course-name').value
    note = document.querySelector('#course-info').value
    console.log (courseName + ' ' + note)

    if (courseName == '') { alert ('you should at least add the course name...') } else alert ('added!')

    getFromStorage()

    //now i want ust to check if we want to add the same course twice...
    //learn how to add a yes or no pop up
    //courses.forEach(course, () => {})

    if (courseName !== '') {
        courses.push (

            {
                courseName,
                note,
                questions: []
            }
        )
        console.log(courses)
    }

    document.querySelector('#course-name').value = ''
    document.querySelector('#course-info').value = ''

    saveCourses()
    //console.log(courses)
})

document.querySelector('.js-done').addEventListener('click', () => {
    // localStorage.setItem('courses', JSON.stringify(courses))
    saveCourses()
    window.location.href = 'home02.html'
})

/*
  the issue is i want to be able to push into an already set of saved courses
  solved! literally cryingggg

*/

const inputs = document.querySelectorAll('input')
inputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      const nextInput = inputs[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
  })
})


// dont forget to save to localstorage when done