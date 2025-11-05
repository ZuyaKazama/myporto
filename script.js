document.addEventListener('DOMContentLoaded', function() {
    
    const textElement = document.getElementById('typing-effect');
    
    if (textElement) {
        const texts = ["Jamaludin", "Karbit", "Gamer"]; 
        let textIndex = 0; 
        let charIndex = 0; 
        let isDeleting = false; 
        const typingSpeed = 150; 
        const deletingSpeed = 50; 
        const delayBetweenTexts = 1800;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, delayBetweenTexts);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; 
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }

        type();
    }
    

});