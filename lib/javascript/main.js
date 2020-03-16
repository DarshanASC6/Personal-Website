var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I like to mess around with computers')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am currently a junior in Millennium High School')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I read a fair bit in my free time')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I like to code')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I play a lot of video games')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am currently learning to code')
    .pauseFor(2500)
    .deleteAll()
    .start();