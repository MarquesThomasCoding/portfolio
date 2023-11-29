const modeButton = document.querySelector('.navbar__menu__item--mode');
const modeIcon = document.querySelector('.navbar__menu__item--mode svg');

// Si le mode n'a jamais été activé, on initialise la variable modeActivated à false, sinon, on le met soit à true soit à false en fonction de la valeur de localStorage
let modeActivated = false;

if(localStorage.getItem('modeActivated') === null){
    localStorage.setItem('modeActivated', false);
    modeActivated = false;
}
else if(localStorage.getItem('modeActivated') === 'true'){
    modeActivated = true;
}
else {
    modeActivated = false;
}


if(!modeActivated){
    document.documentElement.style.setProperty('--color-primary-1', 'var(--color-primary-white)');
    document.documentElement.style.setProperty('--color-primary-2', 'var(--color-secondary-white)');
    document.documentElement.style.setProperty('--color-secondary', 'var(--color-primary-blue)');
    modeIcon.style.setProperty('fill', 'var(--color-primary-blue)');
}
else {
    document.documentElement.style.setProperty('--color-primary-1', 'var(--color-primary-blue)');
    document.documentElement.style.setProperty('--color-primary-2', 'var(--color-secondary-blue)');
    document.documentElement.style.setProperty('--color-secondary', 'var(--color-primary-white)');
    modeIcon.style.setProperty('fill', 'var(--color-primary-white)');
}

modeButton.addEventListener('click', () => {
    if(!modeActivated){
        document.documentElement.style.setProperty('--color-primary-1', 'var(--color-primary-white)');
        document.documentElement.style.setProperty('--color-primary-2', 'var(--color-secondary-white)');
        document.documentElement.style.setProperty('--color-secondary', 'var(--color-primary-blue)');
       modeIcon.style.setProperty('fill', 'var(--color-primary-blue)');
        modeActivated = true;
    }
    else {
        document.documentElement.style.setProperty('--color-primary-1', 'var(--color-primary-blue)');
        document.documentElement.style.setProperty('--color-primary-2', 'var(--color-secondary-blue)');
        document.documentElement.style.setProperty('--color-secondary', 'var(--color-primary-white)');
        modeIcon.style.setProperty('fill', 'var(--color-primary-white)');
        modeActivated = false;
    }
    window.location.reload();
    localStorage.setItem('modeActivated', modeActivated);
});


// Si l'écran fait moins de 600px de large, on change le contenu des title des schools

const schools = document.querySelectorAll('.formation__formations__schools__school');

window.addEventListener('resize', () => {
    if(window.innerWidth < 700){
        schools.forEach(school => {
            const schoolTitle = school.querySelector('a');
            if(schoolTitle.textContent === 'Institut de l\'Internet et du Multimédia') {
                schoolTitle.textContent = 'IIM';
            }
            else if(schoolTitle.textContent === 'Ecole Supérieure d\'Ingénieur Léonard de Vinci') {
                schoolTitle.textContent = 'ESILV';
            }
        });
    }
    else {
        schools.forEach(school => {
            const schoolTitle = school.querySelector('a');
            if(schoolTitle.textContent === 'IIM') {
                schoolTitle.textContent = 'Institut de l\'Internet et du Multimédia';
            }
            else if(schoolTitle.textContent === 'ESILV') {
                schoolTitle.textContent = 'Ecole Supérieure d\'Ingénieur Léonard de Vinci';
            }
        });
    }
});

if(window.innerWidth < 700){
    schools.forEach(school => {
        const schoolTitle = school.querySelector('a');
        if(schoolTitle.textContent === 'Institut de l\'Internet et du Multimédia') {
            schoolTitle.textContent = 'IIM';
        }
        else if(schoolTitle.textContent === 'Ecole Supérieure d\'Ingénieur Léonard de Vinci') {
            schoolTitle.textContent = 'ESILV';
        }
    });
}
else {
    schools.forEach(school => {
        const schoolTitle = school.querySelector('a');
        if(schoolTitle.textContent === 'IIM') {
            schoolTitle.textContent = 'Institut de l\'Internet et du Multimédia';
        }
        else if(schoolTitle.textContent === 'ESILV') {
            schoolTitle.textContent = 'Ecole Supérieure d\'Ingénieur Léonard de Vinci';
        }
    });
}


const burgerMenuIcon = document.querySelector('.navbar__menu__item--burger');

burgerMenuIcon.addEventListener('click', () => {
    const navbarMobile = document.querySelector('.navbar--mobile');

    if(navbarMobile.style.display === 'block'){
        navbarMobile.style.display = 'none';
    }
    else {
        navbarMobile.style.display = 'block';
    }
});

const navbarMobileItem = document.querySelectorAll('.navbar--mobile__menu__item');

navbarMobileItem.forEach(item => {
    item.addEventListener('click', () => {
        const navbarMobile = document.querySelector('.navbar--mobile');
        navbarMobile.style.display = 'none';
    });
});


// Animation au scroll : La section .about-me__presentation apparait en fondu

const aboutMePresentation = document.querySelector('.about-me__presentation');

if(window.innerWidth > 700){
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300){
            aboutMePresentation.style.opacity = '1';
        }
        else {
            aboutMePresentation.style.opacity = '0';
        }
    });
}



// Scroll to

const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const topPos = element.offsetTop;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }