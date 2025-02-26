import { scrollToSection, getCourse, nextInput, nextPage } from "./general.js"

let courses = JSON.parse(localStorage.getItem('flash-courses'))
console.log(courses)

function saveCourses (courses) {
    localStorage.setItem('flash-courses', JSON.stringify(courses))
}

console.log(getCourse(1).courseName)


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
if (!courseQuestions) {
    document.querySelector('.js-questions').innerHTML = `
    <div class="no-quests">
        <h1>You have no questions for this course yet</h1>
    </div>
    `
} else {
courseQuestions.forEach((question, index) => {
    questionsSummary += `
      <div class = 'question-container'>
        <p class="question-00">
        <a href="">
        ${question.question}
        </a>
        </p> 
        <i class = 'del'>delete</i> 
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
nextPage('.js-practice', `flash!.html?courseIndex=${courseIndex}`)

//next us is start practicing buttons

//cross out all the console logs


