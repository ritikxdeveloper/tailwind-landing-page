const dialogBox = document.getElementById('dialogBox');

function handlemenu() {
  dialogBox.classList.toggle('hidden');
}

// auto-close mobile menu on desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) { // lg breakpoint
    dialogBox.classList.add('hidden');
  }
});

// scroll slider for three rows
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  let isVisible = false;

  const scrollHandler = () => {
    if (!isVisible) return;

    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    const totalTranslate = isLTR
      ? translateX + initialTranslateLTR
      : -(translateX + initialTranslateRTL);

    element.style.transform = `translateX(${totalTranslate}px)`;
  };

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        document.addEventListener('scroll', scrollHandler);
      } else {
        document.removeEventListener('scroll', scrollHandler);
      }
    },
    { threshold: 0.1 }
  );

  intersectionObserver.observe(element);
}

// correct mapping
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.7);


  const slider = document.getElementById("slider");
  const monthly = document.getElementById("monthly");
  const monthlyes = document.getElementById("monthlyes");
  const yearlypro = document.getElementById("yearlypro");

  monthly.addEventListener("click", () => {
    slider.style.transform = "translateX(0%)";
    monthlyes.innerText = "$125";
    yearlypro.innerText = "$300";
  });

  yearly.addEventListener("click", () => {
    slider.style.transform = "translateX(96%)";
    monthlyes.innerText = "$100";
    yearlypro.innerText = "$240";
  });


  const dtElements = document.querySelectorAll("dt"); 
  dtElements.forEach(element => {
    element.addEventListener("click", () => {
      const ddID = element.getAttribute('aria-controls');
      const ddElement = document.getElementById(ddID);
      const ddArrowIcon = element.querySelectorAll('i')[0];

      ddElement.classList.toggle('hidden');
      ddArrowIcon.classList.toggle('-rotate-180')
    })
  })