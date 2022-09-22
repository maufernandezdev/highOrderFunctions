const loadObjects = (Courses) =>
{
    const container = document.querySelector('.objects-container');

    Courses.forEach((course, index) => {
        let div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.innerHTML = 
        ` 
            <h3>id: ${course.id}</h3>
            <h3>index: ${index}</h3>
            <h4>name: ${course.name}</h4>
            <h4>duration: ${course.duration}</h4>
            <h4>price: $${course.price}</h4>
        `;
        container.appendChild(div);
    });
}

loadObjects(Courses);