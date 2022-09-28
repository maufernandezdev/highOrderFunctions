let search = document.querySelector('.search');
search.addEventListener('click',()=>{
    let input = document.querySelector('#search-value').value;
    let exists = Courses.some(element => element.name.toLowerCase() === input);
    const label = document.querySelector('#result');
    const message = exists ? 'True' : 'False';
    label.innerText = message;
})