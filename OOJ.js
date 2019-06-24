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

function sharinga(ability){
    return "Using " + ability + '.';
}

function katon(style){
    return "Katon " + style + " style jutsu!"
}

function melee(move){
    return "Using my "+ move + " to attack in close combat."
}

display(name("naruto"))
display(melee("punch"))
display(katon('fire'))
display(sharinga('magenko'))