const orderCoursesBasedOnName = (e) =>
{   
    const id = e.target.id;
    Courses.sort((a , b) =>{
    
        if(a.name > b.name)
        {   
            return id === 'a'? 1 : -1;
        }
    
        if(a.name < b.name)
        {
            return id === 'a'? -1 : 1;
        }
    
        return 0;
    });
    loadObjects(Courses);
}

const orderCoursesBasedOnPrice = (e) =>
{   
    const id = e.target.id;
    Courses.sort((a , b) =>{
    
        if(a.price > b.price)
        {   
            return id === 'lower'? 1 : -1;
        }
    
        if(a.price < b.price)
        {
            return id === 'lower'? -1 : 1;
        }
    
        return 0;
    });
    loadObjects(Courses);
}

// const reverseOrderCourses = (e) =>
// {   
//     console.log('id target: ', e.target.id);
//     Courses.sort((a , b) =>{
    
//         if(a.name < b.name)
//         {
//             return 1;
//         }
    
//         if(a.name > b.name)
//         {
//             return -1;
//         }
    
//         return 0;
//     });
//     loadObjects(Courses);
// }

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
                <h4>name: ${course.name}</h4>
                <h4>price: $${course.price}</h4>
            </div>
        `;
    }
    container.appendChild(div);
}

loadObjects(Courses);

const order = document.querySelector('#a');
const reverse = document.querySelector('#z');
const lower = document.querySelector('#lower');
const higher = document.querySelector('#higher');

order.addEventListener('click', orderCoursesBasedOnName);
reverse.addEventListener('click', orderCoursesBasedOnName);
lower.addEventListener('click', orderCoursesBasedOnPrice);
higher.addEventListener('click', orderCoursesBasedOnPrice);