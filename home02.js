import { getCourse, nextPage } from "./general.js"

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
        
            <div class="course-00">
                <div>
                    <a href="learn-courses.html?courseIndex=${index}">
                        <h3>${currentCourse.courseName}</h3>
                        <p class="notes">note: ${currentCourse.note}</p>
                    </a>
                </div>
                <div class='del-butt'><i class="del">delete</i></div>
            </div>
        
    `
})
document.querySelector('.js-courselist').innerHTML = coursesSummary

nextPage('.js-add', 'add-courses.html')