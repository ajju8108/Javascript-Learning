// 1 = 00000001 1 converted to byte
// 2 = 00000010 2 converted to byte
// R = 00000011 result in console we will get 3 for OR
// R = 00000000 result in console we will get 0 for AND

console.log(1 | 2); //bitwise OR
console.log(1 & 2); //bitwise AND

// Read, Write, Execute
// 00000100
// 00000110
// 00000111
 const readPermission = 4;
 const writePermission = 2;
 const executePermission = 1;

 let myPermission = 0
 myPermission = myPermission | readPermission | writePermission | executePermission
//  console.log(myPermission);
let message = (myPermission & readPermission)?'yes':'no';
console.log(message);
 
 
