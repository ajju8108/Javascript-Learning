/* In switch case we can compare the value of a variable against the bunch of other values */
let role='';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unkown row');
}

if(role==='guest'){
    console.log('From If Else Guest User');
}
else if(role==='moderator'){
    console.log('From If Else Moderator User');
}
else{
    console.log('From If Else Unkown row');
}