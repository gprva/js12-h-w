const input1 = $('.number-1')
const input2 = $('.number-2') 
const btnPlus = $('.btn__minus') 
const result = $('.result')
const btnMinus = $('.btn__plus') 
const btnDivide = $('.btn__divide') 
const btnMultiply = $('.btn__multiply') 



btnPlus.on('click',function(){
    let sum = +input1.val() +  +input2.val()
    result.text(sum)
})

btnMinus.on('click',function(){
    let min = +input1.val() -  +input2.val()
    result.text(min)
})

btnDivide.on('click',function(){
    let sum = +input1.val() /  +input2.val()
    result.text(sum)
})

btnMultiply.on('click',function(){
    let sum = +input1.val() *  +input2.val()
    result.text(sum)
})