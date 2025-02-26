let courses = JSON.parse(localStorage.getItem('flash-courses'))
//console.log(courses)

export function scrollToSection (section) {
    const displaySection = document.querySelector(section)
    if(displaySection) {
        const targetPosition = displaySection.getBoundingClientRect().top + window.pageYOffset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 2000 // Adjust this value to control the speed (1000ms = 1s)
        let start = null

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp
            const progress = timestamp - start
            const progressPercentage = Math.min(progress / duration, 1)
            const ease = progressPercentage * (2 - progressPercentage) // Ease-in-out function
            window.scrollTo(0, startPosition + distance * ease)
            if (progress < duration) {
                window.requestAnimationFrame(step)
            }
        })
    }
}

/*
export function scrollToSection (section) {
    
    if ('scrollBehaviour' in document.documentElement.style == false) {
        import 'element-scroll-polyfill'
    }
        

    const displaySection = document.querySelector(section)
    if(displaySection) [
        displaySection.scrollIntoView({
            behaviour: 'smooth',
            block: 'center'
        })
    ] 
}
*/

export function getCourse (courseIndex) {
    let matchingCourse
    courses.forEach((course, index) => {
        if (courseIndex === index)
           { matchingCourse = course }
    })
    return matchingCourse
}
/*
export function saveCourses () {
    localStorage.setItem('flash-courses', JSON.stringify(courses))
}
    */

export function nextPage(section, ref) {
    document.querySelector(section).addEventListener('click', () => {
        window.location.href = ref
    })
}

export function nextInput () {
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
}

//add a find funtion...