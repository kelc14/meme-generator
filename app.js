const imgUrl = document.querySelector('#image-url');
const form = document.querySelector('form');

const submitButton = document.querySelector('#finalButtonMakeMeme');

const memeSection = document.querySelector('.new-memes')

//text for meme
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const memeLoadingDiv = document.querySelector('.meme-loading')


// this puts a border around the font type chosen
const font1Label = document.querySelector('#font-label-1');
const font2Label = document.querySelector('#font-label-2');
const font3Label = document.querySelector('#font-label-3');
const outerFontDiv = document.querySelector('.outer-font-box');
const outerFontDivColor = document.querySelector('.outer-font-box-color');
//this is for a box around the color choice

const whiteTextLabel = document.querySelector('#font-label-white');
const blackTextLabel = document.querySelector('#font-label-black');
const purpleTextLabel = document.querySelector('#font-label-purple');
const allLabels = document.querySelectorAll('.font-label');

outerFontDiv.addEventListener('click', function(e){
    console.log(e.target);
    let targetRadio = e.target;
    let targetId = targetRadio.getAttribute('id');
    console.log(targetId);
    if (targetId === 'font-1'){
        font1Label.classList.add('selected')
        font2Label.classList.remove('selected')
        font3Label.classList.remove('selected')

    }
     if (targetId === 'font-2'){
        font2Label.classList.add('selected')
        font1Label.classList.remove('selected')
        font3Label.classList.remove('selected')

    }
    if (targetId === 'font-3'){
        font3Label.classList.add('selected')
        font1Label.classList.remove('selected')
        font2Label.classList.remove('selected')

    }
})

outerFontDivColor.addEventListener('click', function(e){
    let targetRadio = e.target;
    let targetId = targetRadio.getAttribute('id');
    if (targetId === 'white'){
        whiteTextLabel.classList.add('selected')
        blackTextLabel.classList.remove('selected')
        purpleTextLabel.classList.remove('selected')
    
    }
    if (targetId === 'black'){
        blackTextLabel.classList.add('selected')
        whiteTextLabel.classList.remove('selected')
        purpleTextLabel.classList.remove('selected')
    
    }
    if (targetId === 'purple'){
        purpleTextLabel.classList.add('selected')
        blackTextLabel.classList.remove('selected')
        whiteTextLabel.classList.remove('selected')
    
    }
})


// submitButton.addEventListener('click', function(e){
//     e.preventDefault();
    
//     // add new div for all items to exist within
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class', 'img-div')

//     const newButton = document.createElement('button');
//     newButton.innerText = "X";
//     newButton.setAttribute('class', 'delete-button');
//     memeLoadingDiv.remove();
     
//     //add all new elements to the section below generator
//     memeSection.appendChild(newDiv);
//     newDiv.appendChild(createImage());
//     newDiv.appendChild(createTopText());
//     newDiv.appendChild(createBottomText());
//     newDiv.appendChild(newButton);

//     //reset values of form to null
//     resetInputs();
    

// })



form.addEventListener('submit', function(e){
    e.preventDefault();
    logSubmit(e);}
);

function logSubmit(e){
    
    
    // add new div for all items to exist within
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'img-div')

    const newButton = document.createElement('button');
    newButton.innerText = "X";
    newButton.setAttribute('class', 'delete-button');
    memeLoadingDiv.remove();
     
    //add all new elements to the section below generator
    memeSection.prepend(newDiv);
    newDiv.appendChild(createImage());
    newDiv.appendChild(createTopText());
    newDiv.appendChild(createBottomText());
    newDiv.appendChild(newButton);

    //reset values of form to null
    resetInputs();
}







function createImage(){
    // take image URL input and turn it into actual element with src attribute
    const actualImgUrl = imgUrl.value;
    const newImg = document.createElement('img');
    
    newImg.setAttribute('src', actualImgUrl);
    newImg.setAttribute('class', "meme-image");

    return newImg;
}


function createTopText(){
    const actualTopText = topText.value;
    const newTextTop = document.createElement('h3');
    newTextTop.innerText = actualTopText;
    newTextTop.innerText = newTextTop.innerText.toUpperCase();
    newTextTop.setAttribute('class', 'text');
     //check font
     if (document.getElementById('font-1').checked){
        newTextTop.classList.add('font-1');
    }
    if(document.getElementById('font-2').checked){
        newTextTop.classList.add('font-2');
    }
    if (document.getElementById('font-3').checked){
        newTextTop.classList.add('font-3'); 
    }
    if (document.getElementById('white').checked){
        newTextTop.classList.add('font-white'); 
    }
    if (document.getElementById('black').checked){
        newTextTop.classList.add('font-black'); 
    }
    if (document.getElementById('purple').checked){
        newTextTop.classList.add('font-purple'); 
    }
    
    newTextTop.setAttribute('id', 'text-top');

    return newTextTop;

}

function createBottomText(){
    //take text from value and turn it into new element
    const actualBottomText = bottomText.value;
    const newTextBottom = document.createElement('h3');
    newTextBottom.innerText = actualBottomText;
    newTextBottom.innerText = newTextBottom.innerText.toUpperCase();
    newTextBottom.setAttribute('class', 'text');
    newTextBottom.setAttribute('id', 'text-bottom');
    //check font
    if (document.getElementById('font-1').checked){
        newTextBottom.classList.add('font-1');
    }
    if(document.getElementById('font-2').checked){
        newTextBottom.classList.add('font-2');
    }
    if(document.getElementById('font-3').checked) {
        newTextBottom.classList.add('font-3'); 
    }
    if (document.getElementById('white').checked){
        newTextBottom.classList.add('font-white'); 
    }
    if (document.getElementById('black').checked){
        newTextBottom.classList.add('font-black'); 
    }
    if (document.getElementById('purple').checked){
        newTextBottom.classList.add('font-purple'); 
    }
    
    return newTextBottom
}



function resetInputs(){
    imgUrl.value = "";
    topText.value = "";
    bottomText.value = "";

    //still need to figure out how to turn off the label border
        font1Label.classList.remove('selected')
        font2Label.classList.remove('selected')
        font3Label.classList.remove('selected')
        whiteTextLabel.classList.remove('selected')
        blackTextLabel.classList.remove('selected')
        purpleTextLabel.classList.remove('selected')
}



memeSection.addEventListener('click', function(event){
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
      }
})
















