// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(persAttrs){
        super(persAttrs);
        this.specialty = persAttrs.specialty;
        this.favLanguage = persAttrs.favLanguage;
        this.catchPhrase = persAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log( `${student.name} receives a perfect score on ${subject}`)
    }
    // STRETCH
    gradingWork(student){
        const goodOrBad = Math.round(Math.random());
        if (goodOrBad === 1){
            student.prop = student.prop + 5;
        } else if (goodOrBad === 0){
            student.prop = student.prop - 5;
        }
        console.log(`${student.name}'s grade is now at a ${student.prop}`);
    }
}

class Student extends Person {
    constructor(stuAttrs){
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
        //STRETCH
        this.prop = 99;
    }
    listsSubjects(){
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if (this.prop > 70){
            console.log('Congrats! You graduated! Go make lots of money!');
        } else if (this.prop <= 70){
            console.log('Oof. Not good. Do some more assignments.');
        }
    }
}

class TeamLead extends Instructor{
    constructor(tlAttrs){
        super(tlAttrs);
        this.gradClassName = tlAttrs.gradClassName;
        this.favInstructor = tlAttrs.favInstructor;
    }
    standUp(slackCh){
        console.log(`${this.name} announces to ${slackCh}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const pace = new Instructor ({
    name: 'Pace',
    age: 'Not a day over 25',
    location: 'Phoenix',
    specialty: 'Cool spanish food',
    favLanguage: 'Espanol',
    catchPhrase: 'I love you guys'
});

const kj = new Student ({
    name: 'KJ',
    age: 'Kobe Bryant\'s Jersey Number',
    location: 'By Disney',
    previousBackground: 'Activites Guy',
    className: 'Web PT 11',
    favSubjects: ['Javascript', 'LESS', 'CSS']
})

const julie = new TeamLead ({
    name: 'Julie',
    age: 'One day over 25',
    location: 'NYC',
    gradClassName: 'Web FT 7',
    favInstructor: 'Pace'
});

// TESTS -------------------
console.log(pace.name);
console.log(kj.age);
console.log(julie.location);
console.log(pace.catchPhrase);
console.log(kj.className);
julie.debugsCode(kj, 'Javascript');
julie.standUp('webpt11_julie');
kj.listsSubjects();
kj.PRAssignment('LESS');
kj.sprintChallenge('HTML');
pace.speak();
pace.demo('CSS');
julie.grade(kj, 'JavaScript');


// STRETCH testing
console.log(kj.prop);
julie.gradingWork(kj);
pace.gradingWork(kj);
kj.graduate();
kj.prop = kj.prop - 50;
kj.graduate();