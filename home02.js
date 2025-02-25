import { getCourse } from "./general.js"

let courses = JSON.parse(localStorage.getItem('flash-courses'))
console.log(courses)

console.log(getCourse(2))

let coursesSummary = ``
courses.forEach((course, index) => {
    let currentCourse = getCourse(index)

    if (currentCourse.note == '') {
        currentCourse.note = 'basically a course I should study'
    }

    coursesSummary += `
        <a href="learn-courses.html?courseIndex=${index}">
            <div class="course-00">
                <h3>${currentCourse.courseName}</h3>
                <p class="notes">note: ${currentCourse.note}</p> 
                <i>delete</i>
            </div>
        </a>
    `
})
document.querySelector('.js-courselist').innerHTML = coursesSummary