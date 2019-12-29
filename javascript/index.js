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
})()