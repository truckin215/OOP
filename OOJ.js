// create a function that console logs any argument given
function display (content){
    console.log(content);
}

// create a function that takes a name/string as a parameter
// and returns "hi my name is" parameter given

function name(name){
    return "Hi, My Name is " + name + ".";
}


// create 3 functions that describe the powers of a ninja
// you would like to create

// function sharinga(ability){
//     return "Using " + ability + '.';
// }

// function katon(style){
//     return "Katon " + style + " style jutsu!"
// }

// function melee(move){
//     return "Using my "+ move + " to attack in close combat."
// }

// display(name("naruto"))
// display(melee("punch"))
// display(katon('fire'))
// display(sharinga('magenko'))

// Object orientation programming
// -Incapsulation
// 

// oop incapsulation: grouping all behavior

const ninja = {
    name(name){
        return "Hi, My Name is " + name + ".";
    },
    sharinga(ability){
        return "Using " + ability + '.';
    },
    katon(style){
        return "Katon " + style + " style jutsu!"
    },
    melee(move){
        return "Using my "+ move + " to attack in close combat."
    }
}


// display(ninja.name("naruto"))
// display(ninja.melee("punch"))
// display(ninja.katon('fire'))
// display(ninja.sharinga('magenko'))

// create a class for instantiating ninjas

// oop abstraction: hiding complexity
class NinjaGod {
    constructor(name, ability, style, move) {
      this.nameInsideNinjaGod    = name;
      this.ability               = ability;
      this.style                 = style;
      this.move                  = move;
    }
    name(){
        return 'Hi, My name is ' + this.nameInsideNinjaGod + ".";
    }
    sharinga(){
        return "Using " + this.ability + '.';
    }
    jutsu(){
        return "Katon " + this.style + " style jutsu!"
    }
    melee(){
        return "Using my "+ this.move + " to attack in close combat."
    }
}

// let itachi = new NinjaGod("Itachi",'Manguko','Fire','Punch');

// display(itachi.name())
// display(itachi.melee())
// display(itachi.sharinga())
// display(itachi.jutsu())

// OOP polymorphism: overide shared behaviors from parent.
class UchiahGod extends NinjaGod {
    constructor(name, ability, style, move){
        super(name, ability, style, move)
        this.village = 'Hidden Leaf';
    }
    combo(){
        return "Activate: " + super.sharinga() + "combo with " + super.melee 
    }
}
let itachi = new UchiahGod("Itachi",'Manguko','Fire','Punch');