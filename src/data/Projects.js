export const projects = [
  {
    img: [
      require('../images/shopping.png'), 
      ''
    ],
    title: 'Pets e-Shopping',
    descShort: 'React Native e-Commerce Project',
    frontEnd: 'React Native, Expo, React Navigation, Mobx, Axios, stripe-client',
    backEnd: 'Express, Express-session, Stripe, Nodemailer, bcrypt, Mongodb, Mongoose',
    desc: '...',
    github: 'https://github.com/Xiaoping-Li/e-shopping',
    youtube: 'https://www.youtube.com/watch?v=REpAoIQ7wbk&t=165s',
    live: '',
  },
  {
    img: [
      require('../images/instagram.png'), 
      ''
    ],
    title: 'Instagram Clone',
    descShort: 'React Native Social Media Project',
    frontEnd: 'React Native, Expo, React Navigation, Mobx, Axios, React-native-elements',
    backEnd: 'Express, Express-session, bcrypt, Mongodb, Mongoose',
    desc: '...',
    github: 'https://github.com/Xiaoping-Li/Instagram_clone',
    youtube: 'https://www.youtube.com/watch?v=d3fy-mpeQ5o',
    live: '',
  },
  {
    img: [
      require('../images/howdiditgo.jpg'), 
      ''
    ],
    title: 'How_did_it_go',
    descShort: 'Team Project by using React',
    frontEnd: 'React, JavaScript, React-Bootstrap',
    backEnd: 'Express, Express-session, bcrypt, JWT, MySQL, Heroku',
    desc: 'Help small businesses request reviews from customers through text messages. Business owner could manage the company states, and send review request through Twilio. The business URLs in the request messages could be tracked by Bitly API, and owners could check the states of these URL links. For example, how many times the URL was clicked, etc.',
    github: 'https://github.com/Lambda-School-Labs/how_did_it_go',
    youtube: '',
    live: 'https://lambda-labs-how-did-it-go.herokuapp.com/',
  },
  {
    img: [
      require('../images/patientFiles.png'), 
      ''
    ],
    title: 'Patient Files Manager',
    descShort: 'First Personal Full-stack React Project',
    frontEnd: 'React, Redux, JavaScript, React-Bootstrap',
    backEnd: 'Express, Express-session, bcrypt, JWT, MySQL, Heroku',
    desc: "My proudest part is my design of patient forms, and how the forms display records. Each form has multiple fields, and these fields will hold records. I designed separate Forms table, Fields table, and Records table. Because the format and content of a form will change frequently per protocols, so this design will make it easier and cheaper to modify the forms, only need to insert rolls to Forms and Fields tables. From the Forms Dropdown list, you can select a form for the patient, if the patient already has records for this form, then the form will be displayed for the patient with these records. If it's the first time to create this form for the patient, an empty form will be created for this patient, all you need to do is update these empty records for these fields.",
    github: 'https://github.com/Xiaoping-Li/patient_files_manager',
    youtube: '',
    live: 'https://patient-files-manager.herokuapp.com/',
  },
  {
    img: [
      require('../images/todo.png'), 
      ''
    ],
    title: 'My Todos',
    descShort: 'React Project',
    frontEnd: 'JavaScript, React, HTML, CSS',
    backEnd: '',
    desc: "This is the first project I did during the first week of my React study, and doesn't have backend. My_Todos is a small project with basic functions.",
    github: 'https://github.com/Xiaoping-Li/My-Todos',
    youtube: '',
    live: 'https://xiaoping-li.github.io/My-Todos/',
  },
];