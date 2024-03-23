const listItem = document.querySelectorAll('.side-nav li a');
const contentItem = document.querySelectorAll('.tab');

listItem.forEach( (item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        listItem.forEach( (item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');

        contentItem.forEach( (item) => {
            item.classList.remove('active');
        });

        document.getElementById(item.dataset.id).classList.add('active');
    });
});