//About Page - Team Section
var teamContent = document.querySelector('.team-content');
const team = [
    {name: 'shatta wale' , job: 'Web Development' , image:'images/person-one.jpg'},
    {name: 'Ruth Shoking' , job: 'Web Designer' , image:'images/person-two.jpg'},
    {name: 'Omar Alsayyed' , job: 'Front End Developer' , image:'images/person-three.jpg'},
    {name: 'Osama Mohamed' , job: 'UI & UX' , image:'images/person-four.webp'},
    {name: 'Menz Gold' , job: 'Web Development' , image:'images/person-five.jpg'},
    {name: 'Lila James' , job: 'Expert Tuter' , image:'images/person-sex.jpg'},
    {name: 'Edem Quist' , job: 'Web Development' , image:'images/person-seven.jpg'},
    {name: 'shatta wale' , job: 'Web Development' , image:'images/person-eaight.webp'},
];


for(var i = 0 ; i <= team.length ; i++)
{
    var personBox = document.createElement('div');
    personBox.className = 'person-box';
    personBox.classList.add('text-center');
    var containerImage = document.createElement('div');
    containerImage.className = 'image-container'
    var personImage = document.createElement('img');
    personImage.setAttribute('src' , team[i]['image']);
    containerImage.appendChild(personImage);
    var personName = document.createElement('h6');
    personName.classList.add('text-white' );
    personName.innerHTML = team[i]['name'];
    var personJob = document.createElement('p');
    personJob.innerHTML = team[i]['job'];
    personBox.appendChild(containerImage);
    personBox.appendChild(personName);
    personBox.appendChild(personJob);

    teamContent.appendChild(personBox);
};