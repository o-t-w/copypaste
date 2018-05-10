
var copyButton = document.querySelector('[data-component="copypaste-button"]');
var copyPasteText = document.querySelector('[data-component="copypaste-text"]');
copyPasteText.value = "http://rdcu.be/HkL0";

function copyText() {
    copyPasteText.select();
    document.execCommand('copy');
    document.querySelector('.c-copypaste__button svg').classList.add('opacity1');
       setTimeout(function() {
         document.querySelector('.c-copypaste__button svg').classList.remove('opacity1');
       }, 700); 
}

copyButton.addEventListener('click', copyText);
copyPasteText.addEventListener('click', copyText);
