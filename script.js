document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    function goToPage2() {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    }

    function selectOption(option) {
        if (option === 'Laos') {
            page2.classList.add('hidden');
            page3.classList.remove('hidden');

            // Ensure the Snoopy GIF is visible for Laos
            const snoopyGif = document.createElement('img');
            snoopyGif.src = 'yippee-jumping-snoopy-hc1gv8bjpmjx9knn.gif';
            snoopyGif.alt = 'Snoopy Jumping';
            snoopyGif.style.maxWidth = '300px';
            snoopyGif.style.marginTop = '20px';

            if (!page3.querySelector('img[src="yippee-jumping-snoopy-hc1gv8bjpmjx9knn.gif"]')) {
                page3.appendChild(snoopyGif);
            }
        } else {
            // Display laughing Snoopy GIF for Japanese or Italian
            let laughingGif = page2.querySelector('img[src="laughing-hysterically.gif"]');

            if (!laughingGif) {
                laughingGif = document.createElement('img');
                laughingGif.src = 'laughing-hysterically.gif';
                laughingGif.alt = 'Laughing Snoopy';
                laughingGif.style.maxWidth = '300px';
                laughingGif.style.marginTop = '20px';
                page2.appendChild(laughingGif);
            }
        }
    }

    // Add event listener to the "Yes" button on page 1
    const yesButton = page1.querySelector('button:first-of-type');
    yesButton.addEventListener('click', goToPage2);

    // Add event listeners to all buttons on page 2
    const optionButtons = page2.querySelectorAll('button');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => selectOption(button.textContent));
    });
});
