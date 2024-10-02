// template_60e7jn1  = template id

// service_x4c3w0i  = service id

// ZZ7cuq0oCev6d0-Mj  =  integration key / public key / user id

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else (
        document.body.classList.remove("dark-theme")
    )
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_x4c3w0i',
        'template_60e7jn1',
        event.target,
        'ZZ7cuq0oCev6d0-Mj'
    ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'the email service is temporarily unavailable. Please contact me directly at wilkinanthony94@gmail.com'
        );
    })
}


function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}