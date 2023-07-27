const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
//<div class="buy-btn">Buy</div>   
//<div class="slide2">
//<img src="./images/bridalbq2.png" alt="gallery-slide">
//</div>