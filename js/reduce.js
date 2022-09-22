const addTotal = () => 
{
    const label = document.querySelector('#total');
    const total = Courses.reduce((acc, item) => acc + item.price , 0);
    const message = `Total: $${total}`;
    label.innerText = message;
}

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
    addTotal();
}

loadObjects(Courses);