//------------------------------------        leetcode 3028 - ant on the boundary        ------------------------------------

let arr = [2,3,-5];
let ant = 0;
let count = 0;

for ( let i = 0 ; i < arr.length ; i ++ ) {
    
    ant += arr[i];

    if ( ant === 0 ) {
        count ++
    }
}

console.log(count);





