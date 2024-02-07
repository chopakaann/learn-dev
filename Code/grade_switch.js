
let score = 80 ; 
switch (true) {
    case score <= 50 :
        grade = "F";
        break;
    case score <= 60 :
        grade = "D";
        break;
    case score <= 70 :
        grade = "C";
        break;
    case score <= 80 :
        grade = "B";
        break;
    default :
        grade = "A";
   
}

console.log("คุณมีคะแนน " + score + " ได้เกรด " + grade)
         
