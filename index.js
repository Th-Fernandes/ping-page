function emailVerifier() {
    const input = document.querySelector('#email');
    const invalidValue = document.querySelector('#invalid-text')

    if(input.value == "") {
        input.style.border = "1px solid red"
        invalidValue.classList.add('invalid')
    } else {
        input.style.border = "1px solid hsl(0, 0%, 59%);"
        invalidValue.classList.remove('invalid')
    }
}