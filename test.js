let Api = '1dd2055119514282815b0601c6dcd4df'
let top_heading = 'https://newsapi.org/v2/top-headlines/sources?apiKey=1dd2055119514282815b0601c6dcd4df'

function RequestTOApi(input="war") {
    fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=1dd2055119514282815b0601c6dcd4df`).then((res) => res.json())
        .then((res) => {
       
            insertNewBoxs(res)
            Hero_section(res)
        }).catch((error) => {
            console.log(error)
        })
}
RequestTOApi()

function insertNewBoxs(res) {

    let parent = document.querySelector(".product-grid")
    parent.innerHTML = ""
    res.articles.forEach(element => {
        parent.innerHTML+= `
        
        <div class="product-wraper">
                <div class="product">
                    <div class="product-image">
                        <img src="${element.urlToImage}"
                            alt="">
                    </div>
                    <div class="product-info">
                    <a href="${element.url}">
                        <h3 class="h1">
                        ${element.title}
                        </h3>
                    </a>    
                        <p>${element.description == 'null' ? ' ' : element.description}</p>
                    </div>
                    <div class="auther-name">
                        <h4>${element.author == 'null' ? " " : element.author}..</h4>
                    </div>
                </div>
            </div>
            `
    });
}
function topHeadingnews() {
    fetch(top_heading)
        .then((res) => res.json())
        .then((res) => {
            SideNewsBoxs(res)
        })
        .catch((error) => {
            console.log(error)
        })
}
topHeadingnews()
function SideNewsBoxs(res) {
    let parent = document.querySelector('.side-news')

    

    res.sources.forEach((element) => {
        parent.innerHTML += `<div class="side-news-box">
                    <div class="side-news-image">
                        <img src=""
                            alt="">
                    </div>
                    <div class="side-news-info">
                        <p>${element?.description}</p>
                        <div class="side-news-names">
                            <small>${element?.name}</small>
                        </div>
                    </div>
                </div>`
    })


}
function Hero_section(res) {
    let parent = document.querySelector('.Hero')
    parent.innerHTML=""
   res.articles.forEach((elem,ind)=>{
    if (ind<3){
        parent.innerHTML += `<div class="box">
            <div class="info">
               <div class="info__first">
                  <h1 class="h3">${elem.title}</h1>
                   <p class="small">${elem.description}</small>
                </div>
            </div>
            <div class="img-container">
                <img src="${elem.urlToImage}" alt="" aria-describedby="">
            </div>
        </div>`
    }
   })
}

function userInput(){
    let inputField=document.querySelector('.InputForm')
    inputField.addEventListener('submit',(e)=>{
        e.preventDefault()
        let input=inputField.elements["input_field"].value
        RequestTOApi(input)
    })
    
   
}
userInput()

function getAllTopic(){
    childParent=document.querySelector(".Topic-for-news")
    console.log(childParent.children)
    for (i in childParent.children){
        childParent.children[i].addEventListener('click',function(){
            RequestTOApi(this.textContent)
        })
    }
}
getAllTopic()