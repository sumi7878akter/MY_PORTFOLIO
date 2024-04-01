const data= ["Afrin","Jesmin","Sumi"];

console.log(data);


{

const project = {firstName:"john", lastName:"doe", age :45, eyecolor:"blue"};
console.log(project)

}
{
    const form = document.querySelector('form');
const yourName = document.querySelector('#yourname');
const email = document.querySelector('#email');
const textarea = document.querySelector('#text');
// console.log(form)

form.addEventListener('submit', formhandler);

function formhandler(e){
    e.preventDefault();

    const formInfo = {
        yourName:yourName.value,
        email:email.value,
        textarea:textarea.value
    }
    console.log(formInfo);

    yourName.value = '',
    email.value = '',
    textarea.value = ''

}
}