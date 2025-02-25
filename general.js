let courses = JSON.parse(localStorage.getItem('flash-courses'))
//console.log(courses)

export function scrollToSection (section) {
    /*
    if ('scrollBehaviour' in document.documentElement.style == false) {
        import 'element-scroll-polyfill'
    }
        */

    const displaySection = document.querySelector(section)
    if(displaySection) [
        displaySection.scrollIntoView({
            behaviour: 'smooth',
            block: 'center'
        })
    ] 
}

export function getCourse (courseIndex) {
    let matchingCourse
    courses.forEach((course, index) => {
        if (courseIndex === index)
           { matchingCourse = course }
    })
    return matchingCourse
}

export function saveCourses () {
    localStorage.setItem('flash-courses', JSON.stringify(courses))
}

//add a find funtion...