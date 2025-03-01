import { scrollToSection, getCourse, nextInput, nextPage, del } from "./general.js"

let courses = JSON.parse(localStorage.getItem('flash-courses'))
console.log(courses)

function saveCourses (courses) {
    localStorage.setItem('flash-courses', JSON.stringify(courses))
}

console.log(getCourse(1).courseName)

//create a function to render the page and delete prev html


const url = new URL(window.location.href)
const courseIndex = JSON.parse(url.searchParams.get('courseIndex'))
//console.log(courseIndex)

const currentCourse = getCourse(courseIndex)
console.log(currentCourse)
const courseName = currentCourse.courseName
let courseQuestions = currentCourse.questions
console.log(courseQuestions)

let newHeader = `
    <h2>${courseName}</h2>
`
document.querySelector('.js-header').innerHTML = newHeader

let questionsSummary = ``
//how do you check for if an array is empty?
if (courseQuestions.length == 0) {
    document.querySelector('.js-questions').innerHTML = `
    <div class="no-quests">
        <h1>:(</h1>
        <h1>You have no questions for this course yet</h1>
    </div>
    `
} else {
courseQuestions.forEach((question, index) => {
    questionsSummary += `
      <div class = 'question-container'>
        <p class="question-00">
        <a href="flash!.html?question-index=${index}&courseIndex=${courseIndex}">
        ${question.question}
        </a>
        </p> 
        <i class="fa-solid fa-trash" class = "del js-del2" data-index = "${index}"></i> 
      </div>
    `
})
document.querySelector('.js-questions').innerHTML = questionsSummary
}

//up next work on the add questions button
let question 
let answer 

document.querySelector('.js-addq').addEventListener('click', () => {
    question = document.querySelector('.js-question').value
    answer = document.querySelector('.js-answer').value

    console.log(question)
    console.log(answer)

    if (question !== '' && answer !== '') {
        courseQuestions.push (
            {
                question,
                answer
            }
        )

        console.log(currentCourse)
        
        //update the course in the courses array with the modified course
        courses[courseIndex] = currentCourse
        saveCourses(courses)

        document.querySelector('.js-question').value = ''
        document.querySelector('.js-answer').value = ''

        location.reload()
    } else {
        alert('please add your question AND the answer to it')
    }
})

nextInput()

document.querySelector('.js-add-q').addEventListener('click', () => {
    scrollToSection('.js-add-questions')
})

nextPage('.js-out', 'home02.html')
if (courseQuestions.length !== 0) {
nextPage('.js-practice', `flash!.html?courseIndex=${courseIndex}&question-index=${NaN}`)
}  else {
    document.querySelector('.js-practice').addEventListener('click', () => {
        alert('you need to add questons first')
    })
}
//next us is start practicing buttons

//cross out all the console logs

document.querySelectorAll('.js-del2').forEach((button) => {
    button.addEventListener('click', () => {
        let ind = button.dataset.index
        console.log(ind)

        courseQuestions = del(ind, courseQuestions)
        currentCourse.questions = courseQuestions
        courses[courseIndex] = currentCourse
        saveCourses(courses)
        window.location.reload()
    })
})


