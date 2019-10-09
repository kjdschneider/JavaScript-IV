/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(gameAttrs){
        this.createdAt = gameAttrs.createdAt;
        this.name = gameAttrs.name;
        this.dimensions = gameAttrs.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game!!!`;
    }
}
  
class CharacterStats extends GameObject{
    constructor(charAttrs){
        super(charAttrs)
        // this.healthPoints = charAttrs.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage!`;
    }
}
  
class Humanoid extends CharacterStats{
    constructor(humanAttrs){
        super(humanAttrs);
        this.team = humanAttrs.team;
        this.weapons = humanAttrs.weapons;
        this.language = humanAttrs.language;
        this.healthPoints = humanAttrs.healthPoints;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
  
// STRETCH STUFF - Hero and Villain Constructors
class Hero extends Humanoid{
    constructor(heroAttrs){
        super(heroAttrs);
        this.heroCatchPhrase = heroAttrs.heroCatchPhrase;
    }
    herosSmile(){
        this.healthPoints = this.healthPoints - Math.round(Math.random() * 10);
        console.log(this.takeDamage());
        console.log(`${this.name} hp = ${this.healthPoints}`);
        if (this.healthPoints <= 0){
            console.log(this.destroy());
        }
    }
    plotArmor(){
        this.healthPoints = Math.round(this.healthPoints + Math.round(Math.random() * 15));
        console.log(`${this.name}, I need you!`);
        console.log(`${this.name} slowly stands to their feet, fire raging within their heart. Their health has gone up a bit.`);
        console.log(`${this.name} hp = ${this.healthPoints}`);
    }
    powerOfFriendship(){
        this.healthPoints = 0;
        console.log(`In display of unbelievable bright, blinding light, the power of friendship overwhelms ${finalBoss.name}. He collapses to the ground, his form smoking, as his evil body falls to ashes.`);
        this.destroy();
    }
}
  

  
  
class Villain extends Humanoid{
    constructor(villainAttrs){
        super(villainAttrs);
        this.villainCatchPhrase = villainAttrs.villainCatchPhrase;
    }
    villainsMonologue(){
        this.healthPoints = 1;
        console.log(`${this.name}, prepare to die! For I, the evil Lord of all that is evil and bad, shall destroy you once and for all here on this very soil! You could never hope to.... *the villain rambles on, somewhat coherently, for approximately 14 and a half minutes*`);
        console.log(this.takeDamage());
        console.log(`${this.name} hp = ${this.healthPoints}`);
    }
    secondPhase(){
        this.healthPoints = this.healthPoints + Math.round(Math.random() * 150);
        console.log(`This isn't even my final form!!!`);
        console.log(`${finalBoss.name} recieves a ton of health as he transforms into the epitomy of true evil!`)
        console.log(`${this.name} hp = ${this.healthPoints}`);
    }
    annihilation(){
        this.healthPoints = 0.00000001;
        console.log(this.takeDamage());
        console.log(`${this.name} falls to their knees. "Urgh. It can't end like this."`);
        console.log(`${this.name} hp = ${this.healthPoints}`);
    }
}
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Hero({
      heroCatchPhrase: 'True power... *makes eye contact* is from within!',
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Hero({
      heroCatchPhrase: 'Yaaaaaaaaaaaa!',
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Hero({
      heroCatchPhrase: 'Take this arrow to the knee, fiend!',
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // STRETCH VILLAIN OVERLORD
    const finalBoss = new Villain({
      villainCatchPhrase: 'The power of friendship shall shatter beneath my inescapable will! *maniacal laughing*',
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 2,
        height: 7
      },
      healthPoints: 25,
      name: 'Kane of Enupnion',
      team: 'Bad guys',
      weapons: [
        'Infinity Gauntlet',
        'Surprising Revelation about the Hero'
      ],
      language: 'Pure evil'
    })
  
    const heroArray = [mage, archer, swordsman];
    const firstHero = heroArray[Math.floor(Math.random() * 3)];
    const heroArray2 = heroArray.filter( item => item !== firstHero);
    const secondHero = heroArray2[Math.floor(Math.random() * 2)];
    const finalHeroArr = heroArray2.filter( item => item !== secondHero);
    const finalHero = finalHeroArr[0];
    // -------------MVP checks----------------
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove healthPoints points from objects which could result in destruction if healthPoints gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // ------------STRETCH Battle---------
    console.log('On a smoky battlefield..... the forces of good and evil approach each other.');
    console.log('');
    console.log(`The mage, called ${mage.name}, steps forward. "${mage.heroCatchPhrase}"`);
    console.log('');
    console.log(`${archer.name} the archer takes aim, notching her arrow. "${archer.heroCatchPhrase}"`);
    console.log('');
    console.log(`The dark Lord of evil and murdered puppies, ${finalBoss.name}, stands to his feet, a smile creeping across his features. "${finalBoss.villainCatchPhrase}"`);
    console.log('');
    console.log(`Finally, ${swordsman.name} leaps in front of the band of heros, sword in hand, yelling his warcry as he charges their mortal enemy. "${swordsman.heroCatchPhrase}"`);
    console.log('');
    console.log(`${swordsman.name} lunges forward, swinging his ${swordsman.weapons[0]}. He flashes a smile.`);
    swordsman.herosSmile.call(finalBoss);
    console.log('');
    console.log(`${archer.name} fires a volley of arrows with her ${archer.weapons[0]}. Two land as direct hits! Her snow white teeth gleam in the burning sunlight.`);
    archer.herosSmile.call(finalBoss);
    archer.herosSmile.call(finalBoss);
    console.log('');
    console.log(`The villain staggers back, his face a grimace. ${mage.name} flashes one last heoric smile as a spell of great power erupts from his ${mage.weapons[0]}. The sight of his flawless teeth terrifies the ruffian.`);
    mage.herosSmile.call(finalBoss);
    console.log('');
    console.log('..... the dust slowly settles from the heroes\' barrage.....')
    console.log('');
    if (finalBoss.healthPoints <= 0){
      console.log('Our heroes have prevailed, due to the power of frienship! Because of course they have!')
    } else if (finalBoss.healthPoints > 0){
      console.log(`${finalBoss.name} rises to his feet, a vicious snicker creeping up his evil throat.`);
      finalBoss.secondPhase();
      console.log('');
      console.log(`${finalBoss.name} strikes back, aiming his loathing power at ${firstHero.name} and ${secondHero.name}.`);
      console.log('');
      finalBoss.annihilation.call(firstHero);
      finalBoss.annihilation.call(secondHero);
      console.log('');
      console.log('The villain turns his head to the final remaining hero.');
      console.log('...');
      console.log('');
      finalBoss.villainsMonologue.call(finalHero);
      console.log('');
      console.log('');
      console.log('');
      console.log(`${finalHero.name} struggles to remain on their feet. Darkness claws at the edges of their vision. They pull their ${finalHero.weapons[finalHero.weapons.length -1]} out, ready for the final showdown.`);
      console.log('');
      finalHero.plotArmor.call(firstHero);
      console.log('');
      finalHero.plotArmor.call(secondHero);
      console.log('');
      console.log('Our band of heroes stands together, preparing for one final attack.');
      console.log('');
      finalHero.powerOfFriendship.call(finalBoss);
      console.log('');
      console.log('Our heroes have prevailed, due to the power of frienship! Because of course they have!');
    }
    