const loadHome = (parentNode) => {
    let homePage = document.createElement('div');
    homePage.className = 'subcontent';

    let title = document.createElement('h1');
    title.innerHTML = 'Welcome to Qin\'s Restaurant!';

    let mainContent = document.createElement('p');
    mainContent.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    let picture = document.createElement('img');
    picture.src = 'https://loulou-paris.com/wp-content/uploads/2016/07/loulou-restaurant-paris-06.jpg';
    picture.alt = 'restaurant image';

    homePage.appendChild(title);
    homePage.appendChild(picture);
    homePage.appendChild(mainContent);
    parentNode.appendChild(homePage);

}

export default loadHome;
