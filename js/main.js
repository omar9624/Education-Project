//Change Nav Color When Scrolling  
window.addEventListener('scroll' , () => {
    document.querySelector('.nav').classList.toggle('window-scroll' , window.scrollY > 0);
    document.querySelector('.open-icon').classList.toggle('menu-scroll' , window.scrollY > 0);
    document.querySelector('.close-icon').classList.toggle('menu-scroll' , window.scrollY > 0);

});
// //Nav Active Color
// var links = document.querySelectorAll('.link');
// links.forEach(link => {
//     link.addEventListener('click' , () => {
//         for(var i=0 ; i <= links.length ; i++)
//         {
//             if(links[i].classList.contains('active'))
//             {
//                 links[i].classList.remove('active');
//             }
//         }
//         link.classList.add('active');
//     })
// })

//When Click Menu Show UL List
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuOpenIcon = document.querySelector('.open');
const menuCloseIcon = document.querySelector('.close');

menu.addEventListener('click' , () => {
    menuList.classList.toggle('d-none');
    menuCloseIcon.classList.toggle('d-none');
    menuOpenIcon.classList.toggle('d-none');
});


//FAQs When Click On Question Show Paragraph And Change Icons 
const faqs = document.querySelectorAll('.quastion');

faqs.forEach(faq => {
    faq.addEventListener('click' , () => {
        const plus_icon = faq.querySelector('.fa-plus');
        const minus_icon = faq.querySelector('.fa-minus'); 
        if(faq.classList.contains('open'))
        {
            faq.classList.remove('open');
            minus_icon.classList.add('d-none');
            plus_icon.classList.remove('d-none');
        }
        else
        {
            for(fa of faqs)
            {
                fa.classList.remove("open");
                if(!fa.querySelector('.fa-minus').classList.contains('d-none'))
                {
                    fa.querySelector('.fa-minus').classList.add('d-none');
                    fa.querySelector('.fa-plus').classList.remove('d-none');
                }
            }
            faq.classList.toggle('open');
            minus_icon.classList.remove('d-none');
            plus_icon.classList.add('d-none');
        }
    })
})

//Courses Page - Courses Section

var coursesContent = document.querySelector('.courses-content');

const courses = [
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-one.jpg'},
    {title: 'Master Web Design in Photoshop: Complete UI/UX Masterclass' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-two.jpg'},
    {title: 'Ultimate Adobe Photoshop Training: From Beginner to Pro 2022' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-three.jpg'},
    {title: 'Modern JavaScript for React JS - ES6 [2022]' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-four.jpg'},
    {title: 'The Complete 2022 Flutter & Dart Development Course [Arabic]' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-five.jpg'},
    {title: 'PHP for Beginners: PHP Crash Course 2022   ' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-six.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-seven.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-eaght.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-nine.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-ten.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-eleven.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-twelve.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-therteen.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-fourteen.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-fiveteen.jpg'},
    {title: 'Full Stack Web Application Development with Django Framework' , info : 'Develop robust & dynamic web applications using Django, the Python-based web framework. Become Full Stack Web Developer.' , image: 'images/course-sixteen.jpg'},
];

for(var i = 0 ; i <= courses.length ; i++)
{
    var courseBox = document.createElement('div');
    courseBox.className = 'course-box';
    courseBox.classList.add('text-center');
    var containerImage = document.createElement('div');
    containerImage.className = 'image-container'
    var courseImage = document.createElement('img');
    courseImage.setAttribute('src' , courses[i]['image']);
    containerImage.appendChild(courseImage);
    var infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';
    var courseTitle = document.createElement('h6');
    courseTitle.classList.add('text-white' );
    courseTitle.innerHTML = courses[i]['title'];
    var courseInfo = document.createElement('p');
    courseInfo.innerHTML = courses[i]['info'];
    var linkBtn = document.createElement('a');
    linkBtn.className = 'btn-box';
    linkBtn.innerHTML = 'Learn More';
    infoContainer.appendChild(courseTitle);
    infoContainer.appendChild(courseInfo);
    infoContainer.appendChild(linkBtn);
    courseBox.appendChild(containerImage);
    courseBox.appendChild(infoContainer);

    coursesContent.appendChild(courseBox);
};




