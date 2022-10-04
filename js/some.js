let search = document.querySelector('.search');
const searchInput = document.querySelector('#search-value')

const checkCourse = () =>
{
    const input = searchInput.value;
    const exists = Courses.some(element => element.name.toLowerCase() === input.toLowerCase());
    const label = document.querySelector('#result');
    const message = exists ? 'True' : 'False';
    label.innerText = message;
}
search.addEventListener('click', checkCourse);
searchInput.addEventListener("keypress", (e)=> {

    if (e.key === "Enter")
    {
        checkCourse();
    }
});
