# askCourgars

askCourgars is a web application developed for the CS260 Web Programming class. It allows university students to create accounts, log in, post questions, and engage in chats with other students.

## Features

- **Create an Account**: Users can sign up with an email and password.
- **Login**: Secure login to access personalized features.
- **Post Questions**: Users can post questions to other students in the university.
- **Chat**: Engage in real-time conversations with fellow students.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: (Add hosting details here, e.g., AWS, Heroku, etc.)

## Notes from the Class

**How to secure a webpage** 

    When you have a not secure from the location var:

    request HTTPS -> Caddy -> Let's Encrypt -> secured!

    1. SSH to WSA from my terminal

    2. Type below on your terminal 
	    cd ~
	    sudo vi Caddyfile

    3. type ‘I” to edit and Change three parts 
	    :80 -> askcougars.click
	    startup.yourdomain -> startup.askcougars.click
	    simon.yourdomain -> simon.askcougars.click

    4. Type esc on your keyboard to finish editing, type :wq to save and quit

    5. Type below so that changes can effect
	    sudo service caddy restart

    6. Secured! Check your webpage’s location bar!


    *The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS)

    Below would help to see the negotiations and make sure https://byu.edu has valid certificate.
    curl -v -s https://byu.edu > /dev/null


**How to make deployFiles.sh script for own html website** 

    Read deployFiles.sh to understand what is going to do.
    
	This case,scp (secure copy) to copy all files from the current directory to your server's public_html directory. The public_html directory is the 	  location where Caddy (your web server) looks for static pages to host.
	
	Type the line below from the working repository
	
	./deployWebsite.sh  -k ~/keys/production.pem -h funkychickens.click


**How to make deployFiles.sh script for simon project work** 

    Read deployFiles.sh to understand what is going to do.

        1)deletes any previous deployment for simon, 

        2)copies up all of the files found in the project directory,

        3)makes sure Caddy is hosting the files under the simon subdomain of your domain
        (e.g. simon.yourdomain.click).
	
	Type the line below from the working repository

    	./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
	
**Things I learned from simon-css assignmet**

	1)Need to think about where to use class
	
	2)Need to think about how much html can handle and let css handle the rest
	
	3)Need to think about how to make stuff appear by using css ex) circle.
	
	4)Need to remember to add <link rel="stylesheet" href="main.css" /> to make main.css to effect on things.
	
	5)If I want to add bootstrap, need to add line below before </head> part.
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />

**Things I learned from startup project HTML & CSS imprementation**

    1)if I want to make the something appear in the middle of screen, the code below works great.
            <section class="vh-100">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    </div>
                </div>
            </section>
    
    2)bootsicon is available and great use.

    3)If I want the dropdown nav to work when you make the screen work, you need to add some javalink on the bottom of the HTML(before /html)

    4)You can make a lot of different types of things by using cards

    5)need to have index.html as main page to meke it public 

**Things I learned from simon-java assignmet**

    1)use DOM to imprement JS
    
    2)querySelectorAll to add some find specific elements so that you can add functions to it
    
    3)build constructor
    
    4)await has to be under async
    
**Things I learned from startup project javaScript imprementation**

    1)add script in the end if you try to get input
    
    2)use id to get info from input box, and store it in local storage/name it something different
    
    3)when you try to get that local storage, make function to return it and = to textContent. 
    querySelector makes it available to print it off as you use player-name on html.
    example below;
    
    class Name {

    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Please log in';
    }

}

    4)need to figure out how to store it as array and print it out, how to make card generates whenever input is posted

const name = new Name();

**Things I learned from simon service project imprementation**

     1)Put all html, css, js, Assets, icon files in the folder called public
     2)npm init - y in directory
     3)npm install express in directory
     4)create index.js file as the root of the project
     5)node index.js in directrory and now you can view from localhost:3000 (4000 for startup)
     6)now this makes it not able to use live server from vs code, but you can use your terminal and localhost.
     7)get is used to get something, post is used when we want to update something
     
**Things I learned from simon-db assignment**

     1)set up mongoDB atlas
     2)add environment below so that we don’t have to hard code all the credential info and get variable
     *change stuff after =
     *host name is after@ from connection string 

     const userName = process.env.MONGOUSER;
     const password = process.env.MONGOPASSWORD;
     const hostname = process.env.MONGOHOSTNAME;

     3)when you are able to get the above done, the below should be able to connect to the mongo database. Test to see by console.log(userName);

     const url = `mongodb+srv://${userName}:${password}@${hostname}`;

     4)npm install mongodb to get mongo install
     
**Things I learned from Simon-login**
     1)npm init -y
     2)npm install express cookie-parser mongodb uuid bcrypt to get all the stuff we need to run for Simon 
     3)uuid is used to create random id
     4)bcrypt is used so that we don’t have to store password, but instead cryptographically hash the password for securing purpose.
     5)401 is unauthorized code
     
**Things I learned from Simon-websocket**
     1)npm init -y
     2)npm install ws
     3)This project allows to see user who are playing Simon at the time and what scores they get in real time
     4)add this line at the begging 
	const { WebSocketServer } = require('ws'); to get ws 
     5)And to create own ws object
	const wss = new WebSocketServer({ noServer: true });
     6)ping and pong are something to keep connection alive
     
**Things I learned from startup service assignmen**
     1)When it is service based projects, need to use deployService.sh instead of deploYFiles.sh I was using for previous projects. You can review what is in that file by reviewing simon projetcs. 
     2)When you debug, you can use comsole.log to see which functions you are in. It dispkayes in terminals or console in google in inspect
     3)When you wan to dispay css that was already written with data you got from database, you can do something like this below to pass all the css in js. Backtick wiil get rid of any errors.
     
     const questionsContainer = document.getElementById('myQuestionContainer');
     for (const [i, question] of questions.entries()) {
        const newCard = document.createElement('div');
        const innerHTML =
            `<div class="card mb-4">
            <div class="card-body">
                <div class="d-flex flex-row user-info">
                    <div class="d-flex flex-column justify-content-start">
                        <span class="d-block font-weight-bold names">@ ` + question.username + `</span>
                        <span class="date text-black-50">` + question.date + `</span>
                    </div>
                </div>
            <div class="mt-2">
                <h5>` + question.title + `</h5>
                <p>` + question.question + `</p>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="like p-2 cursor"><i class="bi bi-reply"></i>
                    <span class="ml-1" onclick="test()">Chat</span></div>
                </div>
            </div>
            </div>
        </div>`
        newCard.innerHTML = innerHTML;
        questionsContainer.appendChild(newCard);
	
**Things I learned from simon react assignmen**
     1) type npx create-react-app template-react interminal so that you can create template of react
     2) you can uninstall some stuff to make it simple ex)web-vitals, sometesting-libraries under dependencies
     3) organize stuff in simon-websocket and move needed folders and file from react template
     4) .jsx will give the react icon so that it is easy to tell that is for react
     5)class is for java so you need to use className instead
     
# Ask Cougars

## Design

This fall, I will be a new freshman at BYU! But, there are lots that I don’t know and worry about. How can I study effectively? Which classes should I take in the first semester? Where can I go shopping for groceries? ..etc. 

**“Ask Cougars”** provides connections between you and other students at BYU to ask any questions regarding school life so that you will be well prepared. You can also ask cougars where are the best places to go on dates or ideas for proposing to loved ones! Questions can be yours.


![Mock](cs260login.png)
![Mock](cs260maindraft.png)

## Key features
    -Creating accounts and logging in

    -Ability to type the question to ask

    -Display of questions and comments from others

    -Questions and comments are persistently stored

    -Ability to delete and edit your questions or comments

    -Liked from all users displayed in real-time

    -Ability for admin to delete any inappropriate questions or comments 

    -Display the date questions and comments were posted

