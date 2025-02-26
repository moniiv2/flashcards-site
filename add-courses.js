import { nextInput, nextPage } from "./general.js";

let courses = [];

let courseName
let note

function saveCourses () {
  localStorage.setItem('flash-courses', JSON.stringify(courses))
}

function getFromStorage () {
  let allSavedCourses = JSON.parse(localStorage.getItem('flash-courses'))
  if (allSavedCourses) {
    courses = allSavedCourses
  }
  return courses
}
console.log(getFromStorage())
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

saveCourses()

nextPage('.js-done', 'home02.html')

/*
  the issue is i want to be able to push into an already set of saved courses
  solved! literally cryingggg

*/

nextInput()


// dont forget to save to localstorage when done