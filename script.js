let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('.btnClear')
let equal = document.querySelector('.btnEqual')

// console.log()


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(e)           
        let value = e.target.dataset.num
        console.log(value)
        screen.value += value
        // console.log(screen.value)

    })
})

equal.addEventListener('click', (e) => {

    let answer = eval(screen.value)
    // console.log(answer)
    screen.value = answer
    // console.log(screen.value)

})

clear.addEventListener('click', (e) => screen.value = '')
