const logotext = "ANU";
const meta = {
    title: "Anu Jose",
    description: "I’m Anu Jose, a passionate full stack developer",
};

const introdata = {
    title: "I’m Anu Jose",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I’m Anu Jose, a passionate full stack developer",
    your_img_url: "https://miro.medium.com/v2/resize:fit:1400/1*dfHPzSeBFN7klvNl2tiUtw.jpeg",
};

const dataabout = {
    title: "About my self",
    aboutme: "I am a Computer Science & Engineering graduate from St. Joseph's College of Engineering and Technology in Palai. My academic background has provided me with a strong foundation in software development principles and a robust programming skill set. Leveraging this knowledge, I've specialized in web design and development, crafting visually engaging and user-friendly websites that make a lasting impression.My expertise in React and Flutter equips me to create responsive and scalable web applications that effortlessly adapt to various devices and platforms. I thrive on taking on intricate challenges and applying innovative solutions to deliver exceptional outcomes..",
};
const Education = [{
        jobtitle: "B.tech",
        where: "SJCET,Palai",
        date: "2019-2023",
    },
    {
        jobtitle: "12 th",
        where: "St Mary's GHSS, Palai",
        date: "2017-2019",
    },
    {
        jobtitle: "10 th",
        where: "St Mary's GHSS, Palai",
        date: "2017",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "C",
        value: 75,
    },
    {
        name: "react",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "sql",
        value: 85,
    },
];

const services = [{
        title: "Applications",
        description: (
            <div>
              <p>-,<b>The Online Movie Ticket Booking</b> - ShowTime is a web-based application that allows users to book movie tickets online. It provides a convenient way for users to browse available movies, view showtimes, and reserve seats for their preferred movie shows.</p>
              <p>-<b>Travel Advisor application</b> Developed using Flutter and Firebase, which caters to all the needs of a traveler.</p>
              <p>-<b>DDoS attack detection and mitigation system using Machine Learning</b>.</p>
            </div>
          )
    },
    {
        title: "Internships",
        description: (
            <div>
                <p>15 day internship in python and datascience</p>
                <p>Completed 7day bootcamp for Web development conducted by Shape AI in collaboration with GDG Ranchi. </p> 
        <p>Attended workshop on Flutter organized by CSI society of SJCET, palai.</p>
        </div>
        )
    },
    {
        title: "Certifications",
        description: (
            <div>
                <p>
                Application developer cloud full stack certification from IBM
                </p>
                <p>Completed 30 days coding challenge in hackerrank</p>
                <p>Java Programming certification by Oracle academy.</p>
                <p>Programming fundamentals authorized by Duke University through Coursera</p>
                <p>RPA starter Certification from UI Path.</p>
            </div>
        )
    },
];

const dataportfolio = [{
        img: "https://www.opensourceforu.com/wp-content/uploads/2020/04/Ddos-attack-main-featured-image.jpg",
        description: "The DDoS Attack detection and mitigation system using machine leaning algorithm.",
        link: "#",
    },
    {
        img: "https://media.designrush.com/inspirations/129712/conversions/_1525365769_33_Tripadvisor-Preview-preview_mobile.jpg",
        description: "Travel Advisor application which caters all the needs of a travellor.",
        link: "#",
    },
    {
        img: "https://i.pinimg.com/736x/40/cb/47/40cb47629ad8dd06b33d8ee5ff7966ae.jpg",
        description: "Movie Booking Application developed using react and springboot.",
        link: "#",
    }
];

const contactConfig = {
    YOUR_EMAIL: "anujose249@gmail.com",
    YOUR_FONE: "(555)123-4567",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/anujos",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/anu-jose-3785aa1a9/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    Education,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};