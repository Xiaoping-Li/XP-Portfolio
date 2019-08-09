export const projects = [
  {
    img: [
      {
        url: require('../images/shopping.png'),
        desc: '',
      },
      {
        url: require('../images/pets-shopping1.png'),
        desc: 'Welcome Screen with SIGN IN, SIGN UP and Autoplay pets\' photos Carousel.',
      },
      {
        url: require('../images/pets-shopping2.png'),
        desc: 'SIGN UP Screen with link to SIGN IN Screen. SIGN IN Screen with RESET PASSWORD link.',
      },
      {
        url: require('../images/pets-shopping3.png'),
        desc: 'Provide Register Email, and a reset password link will be sent to this Email.',
      },
      {
        url: require('../images/pets-shopping4.png'),
        desc: 'Open the Reset Password Link Email, click the link and navigate to RESET PASSWORD Screen in the App, and update password. Will navigate back to SIGN IN Screen automatically.',
      },
      {
        url: require('../images/pets-shopping5.png'),
        desc: 'This is what the Home Screen looks like, and could open Drawer Navigator by clicking the "Burger Icon" or by swiping the screen from left to right on iPhone.',
      },
      {
        url: require('../images/pets-shopping6.png'),
        desc: 'Aquarium and Birds Screens by clicking corresponding Tabs on Home Screen.',
      },
      {
        url: require('../images/pets-shopping7.png'),
        desc: 'Fluffy and Reptile Screens by clicking corresponding Tabs on Home Screen.',
      },
      {
        url: require('../images/pets-shopping8.png'),
        desc: 'Profile Screen: show and modify personal profile.',
      },
      {
        url: require('../images/pets-shopping9.png'),
        desc: 'Empty Shopping Cart, has a link to Home Screen.',
      },
      {
        url: require('../images/pets-shopping10.png'),
        desc: 'Select a pet from pets\' cards list, will show a pets Carousel which is nested in a Modal, and will show the selected pet as active Carousel slide. Could swipe screen to play the Carousel. "Money Icon" navigate back to Shopping Cart; "Shopping Cart Icon" will add pet to Shopping Cart with quantity 1, no duplicate pets could be added to a specific shopping cart.',
      },
      {
        url: require('../images/pets-shopping11.png'),
        desc: 'Shopping Cart with pets. Every time a pet was added to Shopping cart, quantity 1 was reserved for this specific order, and could modify order quantity, and the pet\'s storage quantity will be updated synchronously.',
      },
      {
        url: require('../images/pets-shopping12.png'),
        desc: 'Shipping Address Screen and Order Summary Screen.',
      },
      {
        url: require('../images/pets-shopping13.png'),
        desc: 'Payment Screen supported by Stripe.',
      },
      {
        url: require('../images/pets-shopping14.png'),
        desc: 'When the Payment is completed, the order\'s stats will be updated to SUCCESS, and then the order could be tracked on "Orders List".',
      }  
    ],
    id: 'pets-e-shopping',
    title: 'Pets e-Shopping',
    descShort: 'React Native e-Commerce Project',
    frontEnd: 'React Native, Expo, React Navigation, Mobx, Axios, stripe-client',
    backEnd: 'Express, Express-session, Stripe, Nodemailer, bcrypt, Mongodb, Mongoose',
    desc: 'The amount of items will be reserved for customer when added them to shopping cart, and return the exactly amount to total number if the order was cancelled.    ',
    github: 'https://github.com/Xiaoping-Li/e-shopping',
    youtube: 'https://www.youtube.com/watch?v=REpAoIQ7wbk&t=165s',
    live: '',
  },
  {
    img: [
      {
        url: require('../images/instagram.png'),
        desc: '',
      },
      {
        url: require('../images/instagram1.png'),
        desc: 'Welcome Screen with SIGN IN and SIGN UP navigators.',
      },
      {
        url: require('../images/instagram2.png'),
        desc: 'UI for SIGN IN and SIGN UP Screens. On the bottom of SIGN UP Screen, \'Already have an account? Log In\' will navigate to SIGN IN',
      },
      {
        url: require('../images/instagram3.png'),
        desc: 'On the AddPost Screen, there are two ways to add photos: Select a photo from Album, or, Take a photo by Camera.',
      },
      {
        url: require('../images/instagram4.png'),
        desc: 'UI for Select a photo from Album (LEFT), or, Take a photo by Camera (RIGHT).',
      },
      {
        url: require('../images/instagram5.png'),
        desc: 'From the Home Screen, could see the latest posts from yourself and your friends. Could LIKE, COMMENT, and DOWNLOAD these photos, also could delete yourself\'s posts.',
      },
      {
        url: require('../images/instagram6.png'),
        desc: 'Profile Screens, could show and edit personal information here.',
      },
      {
        url: require('../images/instagram7.png'),
        desc: 'Search a user from Search Screen, if haven\'t connected yet, will show an \"Add Friend\" blue button, after CLICK, a FRIEND REQUEST will be sent to that user.',
      },
      {
        url: require('../images/instagram8.png'),
        desc: 'After you CLICK the \"Add Friend\" blue button, search this user again, now the FRIEND STATUS will change to "REQUESTED". If you recieved a FRIEND REQUEST, and search the sender\'s user name, you could see the FRIEND STATUS is PENDING, which means you have a pending FRIEND REQUEST that is waiting for you to process.',
      },
      {
        url: require('../images/instagram9.png'),
        desc: 'From the REQUESTS Tab on Profiles Screen, you could see all pending requests. If you choose ACCEPT, user will be added to your FRIENDS Tab.',
      },
      {
        url: require('../images/instagram10.png'),
        desc: 'If you search one of your friends, you could see that FRIEND STATUS has been updated to FRIENDS.',
      },
      {
        url: require('../images/instagram11.png'),
        desc: 'On the LIKES Screen, stores all the posts that you liked.',
      },
    ],
    id: 'instagram-clone',
    title: 'Instagram Clone',
    descShort: 'React Native Social Media Project',
    frontEnd: 'React Native, Expo, React Navigation, Mobx, Axios, React-native-elements',
    backEnd: 'Express, Express-session, bcrypt, Mongodb, Mongoose',
    desc: 'This is a simple social media App. User could post photos, add friends, like posts and leave comments. Easy to modify personal profile, search friends and posts, and manager friends and liked posts.',
    github: 'https://github.com/Xiaoping-Li/Instagram_clone',
    youtube: 'https://www.youtube.com/watch?v=d3fy-mpeQ5o',
    live: '',
  },
  {
    img: [
      {
        url: require('../images/howdiditgo.jpg'),
        desc: '',
      },
      {
        url: require('../images/how-did-it-go1.png'),
        desc: 'This is the Welcome Page. Right up corner is the Dynamic Navigation Bar, after SIGN IN, more links will show up.',
      }, 
      {
        url: require('../images/how-did-it-go2.png'),
        desc: 'This belongs to Settings Page. From here you could edit your message template, which will be used when you text your customers.',
      },
      {
        url: require('../images/how-did-it-go3.png'),
        desc: 'This belongs to Settings Page. You could update your business Platform URL here, and show all the URLs on the list below.',
      },
      {
        url: require('../images/how-did-it-go4.png'),
        desc: 'This belongs to Settings Page. Password and Username could be updated here.',
      },
      {
        url: require('../images/how-did-it-go5.png'),
        desc: 'This belongs to Settings Page. Update Billing information: Business Name and Billing Address.',
      },
      {
        url: require('../images/how-did-it-go6.png'),
        desc: 'This belongs to Settings Page. Could Make a Payment here for the service, and was supported by Stripe.',
      },
      {
        url: require('../images/how-did-it-go7.png'),
        desc: 'Send text message Invigations on this page and supported by TWILIO. Use custormers\' Name and Phone Number, send the text message (saved as template earlier), and invite them to leave reviews on the business platforms.',
      },
      {
        url: require('../images/how-did-it-go8.png'),
        desc: 'Check Invitations\' STATS here. Using BITLY to track business short URLs clicked and reviewed stats.',
      },
    ],
    id: 'how-did-it-go',
    title: 'How Did It Go',
    descShort: 'Full-stack React Project',
    frontEnd: 'React, JavaScript, React-Bootstrap',
    backEnd: 'Express, Express-session, bcrypt, JWT, MySQL, Heroku',
    desc: 'Help small businesses request reviews from customers through text messages. Business owner could manage the company states, and send review request through Twilio. The business URLs in the request messages could be tracked by Bitly API, and owners could check the states of these URL links. For example, how many times the URL was clicked, etc.',
    github: 'https://github.com/Lambda-School-Labs/how_did_it_go',
    youtube: '',
    live: 'https://lambda-labs-how-did-it-go.herokuapp.com/',
  },
  {
    img: [
      {
        url: require('../images/patientFiles.png'),
        desc: '',
      },
      {
        url: require('../images/patient-files-manager.png'),
        desc: "This is the Patient Register Page. After filled in patient's information and clicked SAVE button, patient will be saved to the database, and patient's name will show up on the list below.",
      },
      {
        url: require('../images/patient-files-manager1.png'),
        desc: 'This is the Patient Information Page. When CLICK a patient from the list, will navigate to this page. From the FORM DROPDOWN LIST, could select specific Medical Form for the patient. If there are already data for this visit, the data will show up. ',
      },
      {
        url: require('../images/patient-files-manager2.png'),
        desc: 'If there are no data of the specific form for this visit, a blank form will be created.',
      },
    ],
    id: 'patient-files-manager',
    title: 'Patient Files Manager',
    descShort: 'Full-stack React Project',
    frontEnd: 'React, Redux, JavaScript, React-Bootstrap',
    backEnd: 'Express, Express-session, bcrypt, JWT, MySQL, Heroku',
    desc: "I designed separate Forms, Fields, and Records tables. Because the medical form will change frequently per protocols, this design will make it easier and cheaper to modify the forms tables. If it's the first time to create a specific form for patient visit, an empty form will be created, otherwise, the form will be displayed for the patient with these records.",
    github: 'https://github.com/Xiaoping-Li/patient_files_manager',
    youtube: '',
    live: 'https://patient-files-manager.herokuapp.com/',
  },
  {
    img: [
      {
        url: require('../images/todo.png'),
        desc: '',
      },
      {
        url: require('../images/My Todos.png'),
        desc: 'This is my first React Project, which only has Frontend UI with basic features: Add Todo, Delete Todo, and Complete Check.',
      }
    ],
    id: 'my-todos',
    title: 'My Todos',
    descShort: 'React Project',
    frontEnd: 'JavaScript, React, HTML, CSS',
    backEnd: '',
    desc: "This is the first project I did during the first week of my React study, and doesn't have backend. My_Todos is a small project with basic functions and styles: Add todo, delete todo, and complete todo.",
    github: 'https://github.com/Xiaoping-Li/My-Todos',
    youtube: '',
    live: 'https://xiaoping-li.github.io/My-Todos/',
  },
];