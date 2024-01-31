localStorage.clear();
let heroInfo = {
  name: "Minh Cường",
  job: "freelance react developer",
  imgUrl: "https://picsum.photos/200/300",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
};

let aboutMeInfo = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nostrum illum voluptate repellat, praesentium provident accusantium impedit expedita consectetur voluptatibus nihil voluptatum incidunt ipsam magni ipsum mollitia. Aut, velit?",
  fullName: "Trần Minh Cường",
  age: "29",
  languages: ["English", "Spanish"],
  phone: "+84 973712395",
  email: "cuongtm2@rikkeisoft.com",
  address: "Km10 Nguyễn Trãi, Hà Đông, Hà Nội",
  skills: [
    {
      id: 1,
      name: "Photoshop",
      percentage: 87,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "HTML",
      percentage: 80,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      name: "PHP",
      percentage: 95,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 4,
      name: "Javascript",
      percentage: 70,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ],
};

let projects = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/300/300",
    projectName: "Auto Drive Project",
    subTitle: "3D Graphic design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "18-2-2022",
    client: "Symphony",
    techs: ["Angular", "React", "Jquery"],
    type: "Ecommerce",
    url: "www.project.com",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/300/300",
    projectName: "Show Mania - Entertainment",
    subTitle: "Web design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "19-2-2023",
    client: "Cillian Murphy",
    techs: ["Angular", "Jquery"],
    type: "Entertainment",
    url: "www.project.com",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/300/300",
    projectName: "WorldToday - Portal",
    subTitle: "Web design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "20-3-2023",
    client: "Tony Motana",
    techs: ["Angular", "Jquery", "Vue"],
    type: "Web-frontend Development",
    url: "www.project.com",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/300/300",
    projectName: "Doctory - Healthcare",
    subTitle: "Web design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "31-1-2024",
    client: "Keira Knightly",
    techs: ["Angular", "Jquery", "Nodejs"],
    type: "Entertainment",
    url: "www.project.com",
  },
];

localStorage.setItem("HERO_INFO", JSON.stringify(heroInfo));
localStorage.setItem("ME_INFO", JSON.stringify(aboutMeInfo));
localStorage.setItem("PROJECTS", JSON.stringify(projects));

let hero = JSON.parse(localStorage.getItem("HERO_INFO"));
let me = JSON.parse(localStorage.getItem("ME_INFO"));
let project = JSON.parse(localStorage.getItem("PROJECTS"));

let date0 = document.getElementById("date0");
let client0 = document.getElementById("client0");
let tech0 = document.getElementById("tech0");
let type0 = document.getElementById("type0");
let url0 = document.getElementById("url0");
let img0 = document.getElementById("img-0");

let date1 = document.getElementById("date1");
let client1 = document.getElementById("client1");
let tech1 = document.getElementById("tech1");
let type1 = document.getElementById("type1");
let url1 = document.getElementById("url1");
let img1 = document.getElementById("img-1");

let date2 = document.getElementById("date2");
let client2 = document.getElementById("client2");
let tech2 = document.getElementById("tech2");
let type2 = document.getElementById("type2");
let url2 = document.getElementById("url2");
let img2 = document.getElementById("img-2");

let date3 = document.getElementById("date3");
let client3 = document.getElementById("client3");
let tech3 = document.getElementById("tech3");
let type3 = document.getElementById("type3");
let url3 = document.getElementById("url3");
let img3 = document.getElementById("img-3");

date0.textContent = project[0].date;
client0.textContent = project[0].client;
tech0.textContent = project[0].techs;
type0.textContent = project[0].type;
url0.textContent = project[0].url;
img0.src = project[0].imgUrl;

date1.textContent = project[1].date;
client1.textContent = project[1].client;
tech1.textContent = project[1].techs;
type1.textContent = project[1].type;
url1.textContent = project[1].url;
img1.src = project[1].imgUrl;

date2.textContent = project[2].date;
client2.textContent = project[2].client;
tech2.textContent = project[2].techs;
type2.textContent = project[2].type;
url2.textContent = project[2].url;
img2.src = project[2].imgUrl;

date3.textContent = project[3].date;
client3.textContent = project[3].client;
tech3.textContent = project[3].techs;
type3.textContent = project[3].type;
url3.textContent = project[3].url;
img3.src = project[3].imgUrl;

let mainname = document.getElementById("mainname");
mainname.textContent = heroInfo.name;

let heroimg = document.getElementById("heroimg");
heroimg.src = heroInfo.imgUrl;

let job = document.getElementById("job");
job.textContent = heroInfo.job;

let nameabout = document.getElementById("nameabout");
nameabout.textContent = aboutMeInfo.fullName;

let ageabout = document.getElementById("ageabout");
ageabout.textContent = aboutMeInfo.age;

let languaabout = document.getElementById("languaabout");
languaabout.textContent = aboutMeInfo.languages;

let phoneabout = document.getElementById("phoneabout");
phoneabout.textContent = aboutMeInfo.phone;

let emailabout = document.getElementById("emailabout");
emailabout.textContent = aboutMeInfo.email;

let addressabout = document.getElementById("addressabout");
addressabout.textContent = aboutMeInfo.address;
