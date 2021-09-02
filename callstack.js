function ceo() {
    console.log('lets make a dent in the universe');
    cto();
}

function cto() {
    console.log('lets make a game changing product');
    vpengg();
}

function vpengg() {
    console.log('lets make a javascript framework');
    techLead();
}

function techLead() {
    console.log('lets port agular to typescript');
    developer()
}

function developer() {
    console.log('lets copy code from stackoverflow');
    throw new Error('the code didn\'twork')
}

ceo()

// callstack  | ^
// ceo        | |
// -cto       | |
// -vpengg    | |
// -techLead  | |
// -developer V |