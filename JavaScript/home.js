const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
// Fungsi untuk menganimasikan teks per huruf
function animateTextByCharacter(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'animate-text';
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
}

// Fungsi untuk menganimasikan teks per kata
function animateTextByWord(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const words = element.textContent.split(' ');
        element.textContent = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.className = 'word-animation';
            span.style.setProperty('--word-index', index);
            element.appendChild(span);
        });
    });
}

// Panggil fungsi untuk elemen yang diinginkan
document.addEventListener('DOMContentLoaded', () => {
    animateTextByWord('.hero-title');
    animateTextByCharacter('.hero-subtitle');
    animateTextByWord('.feature-title');
});

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});