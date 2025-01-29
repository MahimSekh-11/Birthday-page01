const form = document.getElementById('birthdayForm');
const birthdayMessage =document.getElementById('birthdayMessage');
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const animatedTitle = document.getElementById('animatedTitle');

const titleText = "Welcome to the Birthday Page!";
        titleText.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            if (letter === ' ') {
        span.innerHTML = '&nbsp;';
      }
            span.style.animationDelay = `${index * 0.1}s`;
            animatedTitle.appendChild(span);
        });
               
const  btn= document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.style.display = 'none';
  form.style.display = 'block';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    displayName.textContent = name;
    displayAge.textContent = age;
    form.style.display = 'none';
    animatedTitle.style.display = 'none';
    birthdayMessage.style.display = 'block';
});

const  crossbar= document.getElementById('crossbar');
crossbar.addEventListener('click', (e) => {
    e.preventDefault();
  form.style.display = 'none';
  btn.style.display=`block`;
});

const  cancelButton= document.getElementById('cancelButton');
cancelButton.addEventListener('click', () => {
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
        });

const movableDiv = document.getElementById('movableDiv');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    movableDiv.style.left = `${x}px`;
    movableDiv.style.top = `${y}px`;
});