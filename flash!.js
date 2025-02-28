import { getCourse, nextPage } from "./general.js"

let flip = ''

let courseIndex = JSON.parse(new URL(window.location.href).searchParams.get('courseIndex'))
//console.log(courseIndex)
let currentCourse = getCourse(courseIndex)
console.log(currentCourse)
let courseQuestions = currentCourse.questions
console.log(courseQuestions)

let questionIndex = new URL(window.location.href).searchParams.get('question-index')

function getQuestion (questionIndex, courseQuestions) {
    let matchingQuestion
    courseQuestions.forEach((question, index) => {
        if (index === questionIndex) {
            matchingQuestion = question
        }
    })
    return matchingQuestion
}
console.log(questionIndex)
if (questionIndex !== 'NaN') {
    questionIndex = JSON.parse(questionIndex)

    let questionDisplay
    let pickedQuestion
    pickedQuestion = getQuestion(questionIndex, courseQuestions)
    function flip (currentQ) {
        questionDisplay = `
            <style>
            .flash-q,
            answer {
                display: flex;
                flex-direction: column;
                min-height: 10%;
                text-align: center;
            }
            .js-display-1 {
                height: 70%
            }
            </style>
            <h1 class="flash-q">Q: ${currentQ.question}</h1>
            <p class="answer">
               A: ${currentQ.answer}
            </p>
            <button class="add-q-2">
                <i></i>
                Done
            </button>
        `
        return questionDisplay
    }

    // function flipAnswer(currentQ) {
    //     answerDisplay = `
    //         <p class="answer">
    //             ${currentQ.answer}
    //         </p>
    //         <button class="add-q-2">
    //             <i></i>
    //             Done
    //         </button>
    //     `
    //     return answerDisplay
    // }

    document.querySelector('.js-display-1').innerHTML = `${flip(pickedQuestion)}`
    document.querySelector('.add-q-2').addEventListener('click', () => {
        window.location.href = `learn-courses.html?courseIndex=${courseIndex}`
    })


} 
 else {
practice(courseQuestions)

function practice (courseQ) {

let totalNumOfQuestions = courseQ.length 
//console.log(totalNumOfQuestions)
let randomIndex = Math.floor(Math.random() * (totalNumOfQuestions + 1)) 
console.log(randomIndex)
let currentQuestion 

if (randomIndex === totalNumOfQuestions) {
    randomIndex--
    console.log(randomIndex)
    currentQuestion = getQuestion(randomIndex, courseQ)
} else {
    console.log(randomIndex)
    currentQuestion = getQuestion(randomIndex, courseQ)
}

let questionDisplay
function flipQuestion (currentQ) {
    questionDisplay = `
        <h1 class="flash-q">${currentQ.question}</h1>
        <button id="show">
            <i class="fa-regular fa-eye" style="padding: 0 0.5rem;"></i>
        </button>
    `
    return questionDisplay
}

document.querySelector('.js-display-1').innerHTML = flipQuestion(currentQuestion)

let answerDisplay
function flipAnswer(currentQ) {
    answerDisplay = `
        <p class="answer">
            ${currentQ.answer}
        </p>
        <button class="retry js-retry1">
            <i></i>
            Try Again
        </button>
        <button class="next js-next1">
            <i></i>
            Next!
        </button>
    `
    return answerDisplay
}

//console.log(Math.floor(Math.random() * 17))
show()

function show () {
    document.querySelector('#show').addEventListener('click', () => {
        flip = 'true'
    
        document.querySelector('.main').classList.toggle('flipped')
       
        setTimeout(() => {
            document.querySelector('.main').classList.toggle('flipped')
            document.querySelector('.js-display-1').innerHTML = `${flipAnswer(currentQuestion)}`
    
            let retryQuestion 
            if (flip == 'true') {
                console.log(flip)
                retryQuestion = currentQuestion
                console.log(retryQuestion)
                document.querySelector('.js-retry1').addEventListener('click', () => {
                    console.log('retry')
                    document.querySelector('.js-display-1').innerHTML = `${flipQuestion(retryQuestion)}`
                    show()
                })
            }
    
            document.querySelector('.js-next1').addEventListener('click', () => { 
                //how do you remove a particular element?
                let remainingQuestions = courseQ.toSpliced(randomIndex, 1)
                
                if (remainingQuestions.length !== 0) {
                   practice(remainingQuestions)
                   console.log(remainingQuestions)
                } else {
                    
                    document.querySelector('.js-display-1').innerHTML = `
                        <h1 class="flash-q">You have no more questions to practice!</h1>
                        <button id="restart">
                            <i></i>
                            Restart.
                        </button>
                        <button class="add-q-2">
                            <i></i>
                            Add more
                        </button>
                    `
                    document.querySelector('#restart').addEventListener('click', () => {
                        window.location.reload()
                    })
    
                    //nextPage('.add-q.2', `learn-courses.html?courseIndex=${courseIndex}`)
    
                    document.querySelector('.add-q-2').addEventListener('click', () => {
                        window.location.href = `learn-courses.html?courseIndex=${courseIndex}`
                    })
                }
                
            })
            
        }, 800)
    })
    }
}

}  //ending of else block


//now work on try again button
//what it does is to save the current question and ask it again
//animations might not be necessary for this one

//the buttons displayed are not workingggg!

//i need to set a working flag
//flip isnt working


//work on next button

//you have practiced all your questions click here to restart! - button