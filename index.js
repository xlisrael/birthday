const CORRECT_NAME = "Quiet Girl";

        function checkName() {
            const input = document.getElementById('name-input');
            const name = input.value.trim();
            const errorDiv = document.getElementById('error-message');
            
            if (name.toLowerCase() === CORRECT_NAME.toLowerCase()) {
                // Correct name - melt away and show hearts
                errorDiv.innerHTML = '';
                createHeartExplosion();
                
                document.getElementById('login-page').classList.add('melt');
                
                setTimeout(() => {
                    document.getElementById('login-page').style.display = 'none';
                    document.getElementById('main-page').classList.add('show');
                    
                    // Start typing animation when main page is shown
                    setTimeout(() => {
                        startTypingAnimation();
                    }, 500);
                }, 1000);
            } else {
                
                errorDiv.innerHTML = '🚫 This isn\'t for you! You can leave now!! 🚫';
              
                document.querySelector('.login-container').style.animation = 'shake 0.5s';
                setTimeout(() => {
                    document.querySelector('.login-container').style.animation = '';
                }, 500);
            }
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-20px); }
                75% { transform: translateX(20px); }
            }
        `;
        document.head.appendChild(style);

        function createHeartExplosion() {
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 50);
            }
        }

        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = ['❤️', '🧡', '💛', '🎉', '💙', '💜', '🎂', '🤍'][Math.floor(Math.random() * 8)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (50 + Math.random() * 100) + 'px';
            heart.style.animationDuration = (2 + Math.random() * 1) + 's';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }

        // Typing Animation Function
        function startTypingAnimation() {
            const text = "Happy Birthday Beautiful! 💖 \nThank you for the love, Thank you for listening to me talk rubbish, for tolerating my dumb behaviours.. I know I can be alot but you stayed anyways.. \nYou have been a great friend and I won't for once take it for granted.. \nI pray that this year brings you nothing but joy, peace, hope, blessings, favour in all your endeavours.. \n May all your heart desires and them secret prayers come pass.. \n AMEN \n Enjoy your day to the fullest beautiful, washing plates on me!";
            const typingElement = document.getElementById('typing-text');
            let i = 0;
            
            typingElement.innerHTML = '';
            
            function typeNext() {
                if (i < text.length) {
                    typingElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeNext, 100);
                }
            }
            
            typeNext();
        }

        // Check if user has scrolled to the typing container
        window.addEventListener('scroll', function() {
            const typingContainer = document.querySelector('.typing-container');
            const typingText = document.getElementById('typing-text');
            
            if (typingContainer && typingText && typingText.innerHTML === '') {
                const containerPosition = typingContainer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // If container is visible in viewport
                if (containerPosition.top < windowHeight - 100) {
                    startTypingAnimation();
                }
            }
        });

        // Allow Enter key to submit
        document.getElementById('name-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkName();
            }
        });
