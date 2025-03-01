import { getCourse, nextPage, del } from "./general.js"

let courses = JSON.parse(localStorage.getItem('flash-courses'))
console.log(courses)

if (typeof courses == "undefined" || courses == null || courses.length == 0) {
    document.querySelector('.all-courses').innerHTML = "<div class = 'header' style='border-bottom: none;'><h1>:(</h1><h1>you have no courses yet</h1></div>"
} else {
    renderCoursesSummary()
}

//console.log(getCourse(2))

function renderCoursesSummary () {
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
                <div class='del-butt' data-index = "${index}"><i class="fa-solid fa-trash" class="del"></i></div>
            </div>
        
    `
})
document.querySelector('.js-courselist').innerHTML = coursesSummary

document.querySelectorAll('.del-butt').forEach((button) => {
    button.addEventListener('click', () => {
        let ind = button.dataset.index
        console.log(ind)

        courses = del(ind, courses)
        localStorage.setItem('flash-courses', JSON.stringify(courses))
        window.location.reload()
    })
})
}

nextPage('.js-add', 'add-courses.html')




