// Your code goes here

//FOOOTER COPY WARNING

//declaration of variables 

const footer = document.querySelector('.footer');
const footerParagraph = document.querySelector('.footer p');

const newFooterElement = document.createElement('p');
newFooterElement.textContent = 'VIOLATION OF COPYRIGHT! YOU CANNOT COPY THIS TEXT!!!!';

//event listener

footerParagraph.addEventListener('copy', (e) => {
    const footerWarning = footer.appendChild(newFooterElement);
    footerParagraph.style.display = 'none';
    e.preventDefault();
});


//ADDITIONAL DETAIELD MAP

//declaration of variables

const newImg = {
    img: 'img/detailedMap.png'
};

const contentSection = document.querySelector('.content-section');

const adventureMapSection = document.querySelector('.img-content')

const adventureMapDetailed = document.querySelector('.img-content img');

const newCatchyLine = document.createElement('h1');

newCatchyLine.textContent = "WELCOME TO NEW YORK CITY";

const newDetailedMap = document.createElement('img');

//add attributes to newly created image 

newDetailedMap.setAttribute('src', newImg.img );

//event listener

adventureMapDetailed.addEventListener('mouseover', () => {
    adventureMapDetailed.style.display = 'none';
    adventureMapSection.appendChild(newDetailedMap);
    contentSection.prepend(newCatchyLine);
});

//UNDO ADDITIONAL MAP PAGE 

newDetailedMap.addEventListener('mouseleave', (e) =>
{
    newDetailedMap.style.display = 'none';
    adventureMapDetailed.style.display = 'block';
    newCatchyLine.style.display = 'none';
});


//DOUBLE CLICK TO DARKEN PAGE 

const body = document.body;

body.addEventListener('dblclick', () => {
    body.style['background-color']= 'lightgrey';
},);


//DOUBLE CLICK TO SIGN UP PAGE

//declaration of variables 

const signUpButton1 = document.querySelector('.destination .btn');

const contentPick = document.querySelector('.content-pick');

const signUpPage = document.createElement ('div');

signUpPage.innerHTML =
 `
<div class="container-signup">
        <div>
            <form action="action_page.php">
              <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
            
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>
            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
            
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
                <hr>
            
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" class="btn">Register</button>
              </div>
            
              <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
              </div>
            </form>
        </div>
</div>
`;

//event listener 

signUpButton1.addEventListener('dblclick', () => {   
    contentPick.style.display = 'none';
    footer.prepend(signUpPage);
});


// HIGHLIGHT WELCOME TEXT WITH KEYDOWN 

//declaration of variables 

const 