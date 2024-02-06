// รับค่าวันเกิด ของ User  ชื่อ ตัวแปร birthdayOfWeek
// โดยรับค่า เป็น  Sunday,Monday , Tuseday , Wednesday, Thursday, Friday , Saterday
// ตัวแปรบอกว่า สีไหน ใส่เสริม อำนาจ -->  empowerment
// ตัวแปรบอกว่า  สีไหน ใส่เสริม สุขภาพ --> health
// ตัวแปรบอกว่า  สีไหน ใส่เสริม โชคลาภ --> lucky
// ตัวแปรบอกว่า  สีไหน ใส่เสริม เงินทอง --> wealth 
// ตัวแปรบอกว่า  สีไหน ใส่แล้ว ไม่ดี  --> unlucky


    let birthdayOfWeek = "Sunday";
    let empowerment = "", health ="" ,lucky ="" , wealth ="", unlucky="";

    switch (birthdayOfWeek) {
        case "Monday" : 
             
            empowerment = "Yellow, White , Gray , Green" ;
            health  = "Pink";
            lucky  = "Black , Purple, Brown";
            wealth = "Yellow , Gold , Orange";
            unlucky = "Red";

            break ;
        case "Tuseday" : 
            empowerment = "Pink, Black , Brown , Purple" ;
            health  = "Green";
            lucky  = "Yellow , Gold, Orange";
            wealth = "Gray";
            unlucky = "White";
            break ;
        case "Wednesday" : 
            empowerment = "Green, Yellow , Gold , Orange" ;
            health  = "Black, Purple, Brown";
            lucky  = "Gray";
            wealth = "Blue";
            unlucky = "Pink";
            break ;
        case "Thursday" : 
            empowerment = "Yellow, Blue , Gold , Orange" ;
            health  = "Gray";
            lucky  = "Red";
            wealth = "Gray, White";
            unlucky = "Black , Purple, Brown";
            break ;
        case "Friday" : 
            empowerment = "Yellow, Blue , White , Gray" ;
            health  = "Red";
            lucky  = "Pink";
            wealth = "Green";
            unlucky = "Gray";
            break ;
        case "Saterday" : 
            empowerment = "Black, Purple , Brown " ;
            health  = "Yellow, Orange";
            lucky  = "Blue";
            wealth = "Red";
            unlucky = "Green";
            break ;
        case "Sunday" : 
            empowerment = "Red, Pink" ;
            health  = "Yellow, Gray";
            lucky  = "Green";
            wealth = "Black, Brown";
            unlucky = "Blue";
            break ;
        default :
            empowerment = "Not Found Colors" ;
            health  = "Not Found Colors" ;
            lucky  = "Not Found Colors" ;
            wealth = "Not Found Colors" ;
            unlucky = "Not Found Colors" ;



        }  

console.log("สำหรับคนที่เกิด" +" " + "วัน"+birthdayOfWeek);
console.log("สีที่ใส่แล้วเสริมดวงด้าน อำนาจ ได้แก่ สี  --> " + empowerment);
console.log("สีที่ใส่แล้วเสริมดวงด้าน สุขภาพ ได้แก่ สี --> " + health);
console.log("สีที่ใส่แล้วเสริมดวงด้าน โชคลาภ ได้แก่ สี --> " + lucky);
console.log("สีที่ใส่แล้วเสริมดวงด้าน เงินทอง ได้แก่ สี --> " + wealth);
console.log("สีที่ใส่แล้วไม่เสริมดวง ได้แก่ สี --> " + unlucky);
