function CustomCurser(){
    let cursor=document.querySelector('.custom-curser')
    let navbar=document.querySelector('.nav')
    document.addEventListener("mousemove",(e)=>{
       cursor.style.transform = `translate(calc(${e.clientX-20}px - 10%), calc(${e.clientY-150}px))`
    })
    navbar.addEventListener("mouseenter",(e)=>{
        cursor.style.display="none"
    })
    navbar.addEventListener("mouseleave",(e)=>{
        cursor.style.display="block"
    })
}
CustomCurser()

function search(){
    let forminput=document.querySelector(".Inputform")
    forminput.addEventListener('submit',(e)=>{
        e.preventDefault()
        let inputValue=forminput.elements["nav__input"].value
        console.log(inputValue)
    })
}
search()
