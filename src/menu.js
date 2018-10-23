const loadMenu = (parentNode) => {
    let menuPage = document.createElement('div');
    menuPage.className = 'subcontent';

    let title = document.createElement('h2');
    title.innerHTML = 'Menu:';

    let ul = document.createElement('ul');
    const menuItem = ['LINGUINE POSITANO WITH CHICKEN', 'PROSCIUTTO-WRAPPED PORK TENDERLOIN*', 'LASAGNE', '9OZ TUSCAN-GRILLED SIRLOIN*', 'FETTUCCINE WEESIE', 'CHICKEN MARSALA', 'TOMATO BASIL SALMON*', 'SHRIMP AND SEA SCALLOP SPIEDINO', 'VEAL MARSALA*'];
    let li = [];
    for (var i = 0; i < menuItem.length; i++) {
        li[i] = document.createElement('li');
        li[i].innerHTML = menuItem[i];
        ul.appendChild(li[i]);
    }
    menuPage.appendChild(title);
    menuPage.appendChild(ul);
    parentNode.appendChild(menuPage);

}

export default loadMenu;
