switchimg = document.getElementById('image1');
switchimg.addEventListener('mouseover',changeImage);

function changeImage() {
  img = document.getElementById('image1').src = 'assets/images/image1_2.jpg';
}
