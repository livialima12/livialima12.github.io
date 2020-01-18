(function dinamicSkills(){
  let array = [
    {skill: 'HTML & CSS', level: '60%', animation: 'progress-anim-60'},
    {skill: 'Javascript', level: '80%', animation: 'progress-anim-80'},
    {skill: 'TypeScript', level: '60%', animation: 'progress-anim-60'},
    {skill: 'npm', level: '60%', animation: 'progress-anim-60'},
    {skill: 'Angular', level: '80%', animation: 'progress-anim-80'},
    {skill: 'React', level: '40%', animation: 'progress-anim-40'},
    {skill: 'NodeJS', level: '40%', animation: 'progress-anim-40'},
    {skill: 'Firebase', level: '60%', animation: 'progress-anim-60'},
    {skill: 'MongoDB', level: '40%', animation: 'progress-anim-40'},
  ]

  const element = document.querySelector('.skills');

  array = array.map(el =>
    `<div class="skill-set">
      <p style="width:auto">${el.skill}</p> 
      <div style="width:80%; height:100%" class="final__animation-bar-2">
        <span style="width:${el.level}; animation: ${el.animation} 3s 1 ease"></span>
      </div>
    </div>`
  ).join("")

  element.innerHTML = array
})();


(function dinamicWorkCards(){

  const cardsList = [
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    },
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    },
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    },
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    },
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    },
    {
      title: "Futscorebet", 
      description: 'loren ipson', 
      language: 'javascript', 
      database: 'firebase', 
      link: 'https://github.com/livialima12/futscorebet'
    }
  ]

  const cardDiv = document.querySelector('.cards');

  const divList = cardsList.map(card => {
    return `
      <li class='card'>
      <a href="${card.link}">
        <p class="card-title">${card.title}</p>
        <p class="card-description">${card.description}</p>
        <div class="card-tags-info>
        <p class="card-language">${card.language}</p>
        <p class="card-database">${card.database}</p>
        </div>
        </a>
      </li>
    `
  })

  cardDiv.innerHTML = divList
})()