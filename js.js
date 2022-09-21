const quiz = document.getElementById('quiz');
const info = document.getElementById('info');
const div = document.getElementById('div');
quiz.addEventListener('click',()=>{
    
    // For the information page to be displayed and rest hide //

    if (info.style.display === 'none' && div.style.display === 'block' ) {
        info.style.display = 'block';
        div.style.display = 'none';
      } else {
    
        info.style.display = 'none';
    div.style.display = 'block';
}
});

// For the exit quiz button //

function quit() {
    div.style.display = 'block';
    info.style.display = 'none';
}

