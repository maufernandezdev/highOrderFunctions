const showSelectedCourse = (id) =>
{   
    const selectedCourse = Courses.find(element => element.id === Number(id));
    console.log(selectedCourse);
    if(selectedCourse)
    {   
        const resultCard = document.getElementById("selectedCourse");
        if(resultCard)
        {
            resultCard.parentNode.removeChild(resultCard);
        }
        const resultContainer = document.querySelector('#result-container');
        const div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.setAttribute("id", "selectedCourse"); 
        div.innerHTML = 
        ` 
            <h3>id: ${selectedCourse.id}</h3>
            <h4>name: ${selectedCourse.name}</h4>
            <h4>duration: ${selectedCourse.duration}</h4>
            <h4>price: $${selectedCourse.price}</h4>
        `;
    
        resultContainer.appendChild(div);
    }
}

const loadEvents = () =>
{
    const buttons = document.querySelectorAll('button'); 
    console.log(buttons); 
    for (const element of buttons)
    {
        element.addEventListener('click', ()=>{
            showSelectedCourse(element.id)
        });
    }
}


const loadCourses = (courses) =>
{   
    const container = document.querySelector('#cards-container');
    
    for (const course of courses)
    {   
        let div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.innerHTML = 
        ` 
            <h4>${course.name}</h4>
            <button id="${course.id}" class='button'>Ver detalle <i class='bx bx-chevron-right'></i></button> 
        `;

        container.appendChild(div);
    }

    loadEvents();
}

loadCourses(Courses);