const loadObjects = (Courses) =>
{
    const container = document.querySelector('.objects-container');

    Courses.forEach(course => {
        let div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.innerHTML = 
        ` 
            <h3>id: ${course.id}</h3>
            <h4>name: ${course.name}</h4>
            <h4>duration: ${course.duration}</h4>
            <h4>price: $${course.price}</h4>
        `;
        container.appendChild(div);
    });
}

loadObjects(Courses);

const loadObjectsWithMap = (courses) =>
{
    const container = document.querySelector('#result-container');
    const newArray = courses.map((element)=>{
        return element.name;
    })
    console.log(newArray);
    newArray.forEach(course => {
        let div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.setAttribute("id", "mapCard"); 
        div.innerHTML = 
        ` 
            <h4>${course}</h4>
        `;
        container.appendChild(div);
    });
}

loadObjectsWithMap(Courses);