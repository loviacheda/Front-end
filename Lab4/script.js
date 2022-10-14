function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
function changeColorForFirst(){
    let modification = document.getElementById("changeBackgroundColor");
    modification.style.color = getRandomColor();
    modification.style.background = getRandomColor();
};
function changeColorForSecond() {
    let alteration = document.querySelector(".changeBackgroundColor2");
    alteration.style.color = getRandomColor();
    alteration.style.background = getRandomColor();
};

const picture= document.getElementById('picture');
const imageShown= document.getElementById('imageNormal');
function add_Image(){
    if(picture.classList.contains('visibilityOfImage')){
        alert('Картинка вже додана');
    }else{
      picture.setAttribute('class','');
      imageShown.style.width='450px';
      picture.classList.add('visibilityOfImage');
    }

};
function boost_Image(){
  let imageToShow= document.getElementById("imageNormal");
  imageToShow.style.width="700px";
};
function diminish_Image(){
    let imageToShow= document.getElementById("imageNormal");
    imageToShow.style.width="300px";
};
function delete_Image(){
    picture.setAttribute('class','');
    picture.classList.add('noVisibilityOfImage');
};
