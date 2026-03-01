// Задание 1 //

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let userList = [
    {email: 'test@mail.ru',   pass: '1234'},
    {email: 'mymail@mail.ru', pass: 'qwerty'}
];

function auth() {
    let email    = document.getElementById('exampleInputEmail1').value;
    let pass     = document.getElementById('exampleInputPassword1').value;
    let infoText = document.getElementById('exampleCheck1');

    if (!email || !pass) {
        infoText.innerHTML = "Не все поля заполнены!";
        return null;
    }

    if (!validateEmail(email)) {
        infoText.innerHTML = "Некоррекртный адрес почты!";
        return null;
    }
    
    let is_found = false;
    userList.forEach((user) => {
        if (user.email == email && user.pass == pass) {
            is_found = true;
        }
    })

    if (is_found)
        infoText.innerHTML = "Вход выполнен!";
    else
        infoText.innerHTML = "Пользователь не найлен!";
};



// Задание 2 //

let faculties = [
    "Передовая инженерная школа «Моторы будущего» (ПИШ)", 
    "Факультет авиационных двигателей, энергетики и транспорта (ФАДЭТ)", 
    "Факультет башкирской филологии, востоковедения и журналистики (ФБФВиЖ)",
    "Факультет подготовки инженерных кадров при ПАО «ОДК-УМПО» (ФПИК при УМПО)",
    "Институт гуманитарных и социальных наук (ИГСН)",
    "Институт информатики, математики и робототехники (ИИМРТ)",
    "Институт истории и государственного управления (ИИГУ)",
    "Институт права (ИП)",
    "Институт природы и человека (ИПЧ)",
    "Институт технологий и материалов (ИТМ)",
    "Институт химии и защиты в чрезвычайных ситуациях (ИХЗЧС)",
    "Институт экономики, управления и бизнеса (ИНЭБ)",
    "Институт электротехнического инжиниринга (ИЭТИ)",
    "Физико-технический институт (ФТИ)"
];

function findFaculty(e) {
    let text   = e.value;
    let result = document.getElementById('result');
    result.innerHTML = "";
    
    let foundElems = faculties.filter(x => x.toLowerCase().indexOf(text.toLowerCase()) == 0)
    
    for (let elem of foundElems) {
        let link = document.createElement('a');
        link.className = "d-block";
        link.innerText = elem;
        link.href      = "#";

        result.appendChild(link);
    }
};



// Задание 3 //

let sum = 0;
const classNameInCart = "in-cart";

function sumItem(item) {
    let allsum  = document.getElementById('sum');
    let card    = item.parentNode;
    let cardSum = parseFloat(card.getElementsByClassName('card-sum')[0].innerHTML);

    if (item.classList.contains(classNameInCart)) {
        item.classList.remove(classNameInCart);
        item.innerHTML = "В корзину";
        sum -= cardSum;
    }
    else {
        item.classList.add(classNameInCart);
        item.innerHTML = "Убрать";
        sum += cardSum;
    }

    allsum.innerHTML = sum;
};
