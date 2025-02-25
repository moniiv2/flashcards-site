import { scrollToSection, getCourse, saveCourses } from "./general.js"

let courses = JSON.parse(localStorage.getItem('flash-courses'))
console.log(courses)

console.log(getCourse(1).courseName)


const url = new URL(window.location.href)
const courseIndex = JSON.parse(url.searchParams.get('courseIndex'))

const currentCourse = getCourse(courseIndex)
const courseName = currentCourse.courseName
let courseQuestions = currentCourse.questions

let newHeader = `
    <h2>${courseName}</h2>
`
document.querySelector('.js-header').innerHTML = newHeader

let questionsSummary = ``
//how do you check for if an array is empty?
if (!courseQuestions) {
    document.querySelector('.js-questions').innerHTML = `
    <div class="no-quests">
        <h1>You have no questions for this course yet</h1>
    </div>
    `
} else {
courseQuestions.forEach((question, index) => {
    questionsSummary += `
        <p class="question-00">
        <a href="">
        ${question.question}
        </a>
        </p> 
        <i>delete</i> 
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
        currentCourse.questions.push (
            {
                question,
                answer
            }
        )

        console.log(courses)
        
        saveCourses()

        document.querySelector('.js-question').value = ''
        document.querySelector('.js-answer').value = ''

        location.reload()
    } else {
        alert('please add your question AND the answer to it')
    }
})

document.querySelector('.js-add-q').addEventListener('click', () => {
    scrollToSection('.js-add-questions')
})

//next us is start practicing buttons

//cross out all the console logs


