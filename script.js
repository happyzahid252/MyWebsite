const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});








 // Typing effect script
 const words = ["Developer", "Hafiz-ul-Quran", "Coder"];
 let wordIndex = 0;
 let letterIndex = 0;
 let currentWord = "";
 let typing = true;

 const typingSpeed = 150;   // Speed of typing
 const erasingSpeed = 100;  // Speed of erasing
 const delayBetweenWords = 1000;  // Delay before switching to the next word

 const typedElement = document.getElementById('typed-words');

 function typeWord() {
     if (typing) {
         if (letterIndex < words[wordIndex].length) {
             currentWord += words[wordIndex].charAt(letterIndex);
             typedElement.textContent = currentWord;
             letterIndex++;
             setTimeout(typeWord, typingSpeed);
         } else {
             typing = false;
             setTimeout(typeWord, delayBetweenWords);
         }
     } else {
         if (letterIndex > 0) {
             currentWord = currentWord.slice(0, -1);
             typedElement.textContent = currentWord;
             letterIndex--;
             setTimeout(typeWord, erasingSpeed);
         } else {
             typing = true;
             wordIndex = (wordIndex + 1) % words.length;  // Loop back to the first word
             setTimeout(typeWord, delayBetweenWords);
         }
     }
 }

 // Start the typing effect
 typeWord();













 
 const readMoreButtons = document.querySelectorAll('.read-more');

 readMoreButtons.forEach(button => {
     button.addEventListener('click', () => {
         const fullContent = button.previousElementSibling;
         fullContent.style.display = fullContent.style.display === 'block' ? 'none' : 'block';
         button.textContent = fullContent.style.display === 'block' ? 'Read Less' : 'Read More';
     });
 });

