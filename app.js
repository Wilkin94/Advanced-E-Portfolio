// template_60e7jn1  = template id

// service_x4c3w0i  = service id

// ZZ7cuq0oCev6d0-Mj  =  integration key / public key / user id

function contact(event) {
    event.preventDefault();
 //   emailjs
 //   .sendForm(
 //       'service_x4c3w0i',
 //       'template_60e7jn1',
 //       event.target
 //       'ZZ7cuq0oCev6d0-Mj'
 //   ).then( () => {
 //       console.log('this worked')
 //   })
 const loading = document.querySelector('.modal__overlay--loading')
 const success = document.querySelector('.modal__overlay--success')
 
 setTimeout(() => {
    console.log('it worked')
 }, 500);
}