var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: ['']
});

typewriter
  .typeString('I\'m sorry you\'re having problems,')
  .pauseFor(50)
  .typeString(' but what you\'re looking for isn\'t here...')
  //.deleteAll(1)
  .pauseFor(50)
  .typeString('<br/>')
  .pauseFor(50)
  .typeString('<br/>')
  .pauseFor(150)
  //.deleteAll(1)
  .typeString('My name is Carlos, and I am a software developer.')
  .pauseFor(500)
  .typeString('<br/>')
  .pauseFor(100)
  .typeString('<br/>')
  .pauseFor(10)
  .typeString('Just let me know what you need and I\'ll find it for you... Find me online: <br /><br />')
  .pauseFor(500)
  .typeString('@sqsandres <br />')
  .typeString('sqsandres@gmail.com <br /><br />')
  .typeString('<a class="" href="https://www.sqsandres.dev/" title="return home">Return home</a><span class="cursor">█</span>')