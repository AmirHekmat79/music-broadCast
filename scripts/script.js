let $ = document;
let imgElement = $.querySelector('.bgImage');
let imagesSrc = [
    './images/1.jpg' , 
    './images/2.jpg' , 
    './images/3.jpg' , 
    './images/4.jpg' , 
    './images/5.jpg' , 
    './images/6.jpeg' , 
    './images/7.jpg' 
]
let pictureIndex = 0;
let themeFlag;
let section1 = $.querySelector('.section1');
let h3Element = $.querySelector('.title')
let paragraphElement = $.querySelector('.Content');
let navElement = $.querySelector('nav');
let linkElements = $.querySelectorAll('.navbarLink');
let IconElement = $.querySelector('.Icon');
let section2Element = $.querySelector('.section2');
let h4Element = $.querySelector('.h4Element');
let line1 = $.querySelector('.lh-1');
let line2 = $.querySelector('.lh-2');
let line3 = $.querySelector('.lh-3');
let musicContentParagraph = $.querySelector('.musicContent');
let footerLink = $.querySelectorAll('.footerLink');
let aboutContent = $.querySelector('.aboutContent');
let Footer = $.querySelector('.Footer');
let upBtn = $.querySelector('.upBtn');
let audioElems = $.querySelectorAll('audio');
let playButton = $.querySelectorAll('.playButton');


// this function calls the  nextPictureHandler function every 9 seconds
setInterval(function(){
    nextPictureHandler();
},9000)


// this functions change the theme background by firing click event on moon icon or sun icon

function favoriteThemeHandler(){
    if(localStorage.getItem('theme') === 'dark'){
        themeFlag = 'light';
        changeThemeHandler();
    }else{
        themeFlag = 'dark';
        changeThemeHandler();
    }
}

function changeThemeHandler(){
    if(themeFlag === 'dark'){
        $.body.style.backgroundColor = '#eee';
        section1.classList.remove('banner');
        section2Element.classList.remove('banner');
        line1.classList.remove('bg-light');
        line2.classList.remove('bg-light');
        line3.classList.remove('bg-light');
        line1.classList.add('bg-dark');
        line2.classList.add('bg-dark');
        line3.classList.add('bg-dark');
        IconElement.classList.remove('fa-moon' , 'text-light');
        IconElement.classList.add('fa-sun' , 'text-warning');
        navElement.classList.remove('navbarStyle','bg-dark');
        navElement.classList.add('bg-light' ,'shadow');
        linkElements.forEach(function(link){
            link.classList.add('text-dark');
        })
        paragraphElement.classList.add('text-dark');
        h3Element.classList.add('text-black-50');
        h4Element.classList.remove('text-light');
        Footer.classList.remove('banner' , 'bg-dark');
        Footer.classList.add('shadow-lg' ,'py-4' , 'px-4');
        musicContentParagraph.classList.remove('text-light');
        musicContentParagraph.classList.add('text-dark');
        footerLink.forEach(function(link){
            link.classList.remove('text-light');
            link.classList.add('text-dark');
           })
        aboutContent.classList.remove('text-light');
        aboutContent.classList.add('text-dark');
        themeFlag = 'light';
        localStorage.setItem('theme' ,themeFlag);

    }else{
        section1.classList.add('banner');
        section2Element.classList.add('banner');
        line1.classList.remove('bg-dark');
        line2.classList.remove('bg-dark');
        line3.classList.remove('bg-dark');
        line1.classList.add('bg-light');
        line2.classList.add('bg-light');
        line3.classList.add('bg-light');
        IconElement.classList.remove('fa-sun' , 'text-warning');
        IconElement.classList.add('fa-moon' , 'text-light');
        navElement.classList.add('navbarStyle','bg-dark');
        linkElements.forEach(function(link){
            link.classList.remove('text-dark');
        })
        paragraphElement.classList.remove('text-dark');
        h3Element.classList.remove('text-black-50');
        h4Element.classList.add('text-light');
        Footer.classList.add('banner' ,'bg-dark');
        Footer.classList.remove('shadow-lg' ,'py-4','px-4');
        musicContentParagraph.classList.add('text-light');
        musicContentParagraph.classList.remove('text-dark');
       footerLink.forEach(function(link){
        link.classList.add('text-light');
        link.classList.remove('text-dark');
       })
       aboutContent.classList.add('text-light');
       aboutContent.classList.remove('text-dark');
       themeFlag = 'dark';
       localStorage.setItem('theme' ,themeFlag);
    }
}
// this function calls whenever the user click on previous button
function previousPictureHandler(){
    pictureIndex--;
    if(pictureIndex < 0){
        pictureIndex = 6;
        imgElement.setAttribute('src' , imagesSrc[pictureIndex]);
    }else{
        imgElement.setAttribute('src' , imagesSrc[pictureIndex]);
    }
}

// this function calls whenever the user click on next button
function nextPictureHandler(){
    pictureIndex++;
    if(pictureIndex < imagesSrc.length ){
        imgElement.setAttribute('src' , imagesSrc[pictureIndex]);
    }else{
        pictureIndex = 0;
        imgElement.setAttribute('src' , imagesSrc[pictureIndex]);
    }
}

//this function plays or pauses the musics by firing click event on play buttons
playButton.forEach(function(player){
    player.addEventListener('click' , function(event){
        let btnData = event.target.dataset.name;
        audioElems.forEach(function(music){
            if(btnData === music.dataset.name){
                music.play();
            }else{
                music.pause();
            }
        })
    })
})
// this function scrolls the window or (browser window) to this point--> (0,0)
function goUpHandler(){
    window.scrollTo(0 , 0);
    upBtn.blur();
}