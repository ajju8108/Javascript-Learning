// unction declaration
function walk() {
    console.log('walk');
}

walk()
//Anonymous function Expression
let run = function () {
    console.log('run');
};
let move = run;
run()
move()