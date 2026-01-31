 // 1. CHOOSE THE SCHOOL SLIDER & DOTS LOGIC
    const schoolSlider = document.getElementById('schoolSlider');
    const schoolDots = document.querySelectorAll('.choose-school-section .dot');

    if (schoolSlider) {
        schoolSlider.addEventListener('scroll', () => {
            const card = schoolSlider.querySelector('.school-card');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = 15; 
                const totalStep = cardWidth + gap;
                const activeIndex = Math.round(schoolSlider.scrollLeft / totalStep);

                schoolDots.forEach((dot, index) => {
                    if (index === activeIndex) dot.classList.add('active');
                    else dot.classList.remove('active');
                });
            }
        });
    }

    function scrollToCard(index) {
        if (schoolSlider) {
            const card = schoolSlider.querySelector('.school-card');
            const gap = 15;
            const totalStep = card.offsetWidth + gap;
            schoolSlider.scrollTo({
                left: index * totalStep,
                behavior: 'smooth'
            });
        }
    }

    // 2. STICKY NAV LOGIC
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('stickyNav');
        if (window.innerWidth > 768) {
            if (window.scrollY > 100) nav.classList.add('nav-active');
            else nav.classList.remove('nav-active');
        }
    });

    // 3. EXHIBITION HIGHLIGHTS SLIDER LOGIC
    const highlightsSlider = document.getElementById('highlightsSlider');
    let h_autoPlayInterval;

    function moveHighlightsSlider(direction) {
        if (highlightsSlider) {
            const card = highlightsSlider.querySelector('.highlight-card');
            // Dynamically calculate gap from computed style
            const style = window.getComputedStyle(highlightsSlider);
            const gap = parseInt(style.gap) || 20; 
            const scrollAmount = (card.offsetWidth + gap) * direction;
            
            highlightsSlider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            resetHAutoPlay();
        }
    }

    function startHAutoPlay() {
        // Auto-play only on Desktop (Big screens)
        if (highlightsSlider && window.innerWidth > 1100) {
            h_autoPlayInterval = setInterval(() => {
                const maxScroll = highlightsSlider.scrollWidth - highlightsSlider.clientWidth;
                if (highlightsSlider.scrollLeft >= maxScroll - 10) {
                    highlightsSlider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    moveHighlightsSlider(1);
                }
            }, 4000);
        }
    }

    function resetHAutoPlay() {
        clearInterval(h_autoPlayInterval);
        startHAutoPlay();
    }

    // Initialize and Event Listeners
    startHAutoPlay();
    if (highlightsSlider) {
        highlightsSlider.addEventListener('mouseenter', () => clearInterval(h_autoPlayInterval));
        highlightsSlider.addEventListener('mouseleave', startHAutoPlay);
    }
