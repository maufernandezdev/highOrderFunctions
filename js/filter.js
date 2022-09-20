const Courses = 
[
    {
        id:1,
        name:"Introduction to programming",
        price:75,
    },
    {
        id:2,
        name:"Web development",
        price:100,
    },
    {
        id:3,
        name:"JavaScript",
        price: 100,
    },
    {
        id:4,
        name:"React Js",
        price:120,
    },
    {
        id:5,
        name:"Node Js",
        price:210,
    },
]

const loadObjects = (Courses) =>
{
    let container = document.querySelector('.objects-container');

    let cardsContainer = document.querySelector("#cardsContainer");
    if(cardsContainer)
    {
        cardsContainer.parentNode.removeChild(cardsContainer);
    }
    let div = document.createElement('div');
    div.setAttribute('id','cardsContainer');

    for (const course of Courses)
    {
        div.innerHTML += `
            <div class="card">
                <h3>id: ${course.id}</h3>
                <h4>name: ${course.name}</h4>
                <h4>price: ${course.price}</h4>
            </div>
        `;
    }
    container.appendChild(div);
}

loadObjects(Courses);

// let search = document.querySelector('.search');
// search.addEventListener('click',()=>{
//     let input = document.querySelector('#search-value').value;
//     let product = Courses.filter(element => element.name.toLowerCase().includes(input));
//     console.log('prod: ', product);
// })
let until = document.querySelector('#one');
let oneHundredToTwoHundred = document.querySelector('#two');
let twoHundred = document.querySelector('#three');
let all = document.querySelector('#all');

until.addEventListener('click',()=>{
    let courses = Courses.filter(element => element.price < 100);
    loadObjects(courses);
});

oneHundredToTwoHundred.addEventListener('click',()=>{
    let courses = Courses.filter(element => element.price >= 100 && element.price < 200);
    loadObjects(courses);
});

twoHundred.addEventListener('click',()=>{
    let courses = Courses.filter(element => element.price > 200);
    loadObjects(courses);
});

all.addEventListener('click',()=>{
    loadObjects(Courses);
});