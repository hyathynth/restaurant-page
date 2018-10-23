const loadContact = (parentNode) => {
    let contactPage = document.createElement('div');
    contactPage.className = 'subcontent';

    let title = document.createElement('h2');
    title.innerHTML = 'Contact Us:';

    let name = document.createElement('p');
    name.innerHTML = "Qin";

    let phone = document.createElement('p');
    phone.innerHTML = "111-222-3456";

    let email = document.createElement('p');
    email.innerHTML = "qchen0321@gmail.com";

    contactPage.appendChild(title);
    contactPage.appendChild(name);
    contactPage.appendChild(phone);
    contactPage.appendChild(email);
    parentNode.appendChild(contactPage);

}

export default loadContact;
