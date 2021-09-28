For ( i = 0, i < 5, i++ ) {
    for ( j = 0, j < 4 - i ; j++ ) {
        console.log("_")
    }
    for ( j = 0, j < 2*i + 1 ; j++ ) {
        console.log("*")
    }
}


let i = 0;
let rb =  0; //rhombus
let x = 5; //rhombus가로대각선의 별의 개수
while ( i <= 2 * x ){
    rb = x - i;
    if( rb < 0 ) {
        rb *= -1;
    }
    for (let j = 0; j < rb; j++ ) {
        console.log(" ");
    }
    for (let k = 0; k < 2*(x - rb)-1; k++) {
        console.log("*")
    }
}