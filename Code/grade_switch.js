
function gradeforUser (score){
// let score = 50 ; 
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
    return grade;
}

gradeforUser("99");
console.log("คุณได้เกรด " + grade);

// ทดสอบเพิ่มเติม 
// const myScore = 99;
// console.log(gradeforUser(myScore));
// console.log("คุณมีคะแนน " + myScore + " ได้เกรด " + grade)
         
