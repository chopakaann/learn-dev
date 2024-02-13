// แต่ละ เมนูราคาเท่าไหร่ 
// เย็น เพิ่ม 5 บาท
//นำแก้วมาเอง ลง 5 บาท 
//ตั้งแปรแรก รับค่าเมนู ที่ลูกค้าสั่ง   --> order
//เมื่อลุกคัาสั่ง ต้อง รับค่าจาก Order  แล้ว แจ้งราคาลูกค้า ใช้ตัวแปร --> priceOrder 
//สอบถามลูกค้าว่ารับ เมนู ร้อนหรือ เย็น ตัวแปรรับค่า --> menuType
// เมื่อลูกค้า แจ้ง ว่าเย็น  ต้องมีตัวแปร อีกตัวเพื่อแจ้งลูกค้าว่า บวก เพิ่มราคาหรือไม่ --> priceType
//สอบถามลูกค้าอีก ว่านำแก้วมาหรือไม่  --> glass 
// ถ้าลุกค้า ทำแก้วมา ลด 5  บาท --> priceDiscount   

//เริ่มต้นเขียน แต่ละเคส  รับ Order ก่อน  แล้วก็ ต้อง มีตัวแปร ที่คำนวณ ราคา  รวมทั้งหมด 
//ลองสร้าง Function ตั้งชื่อ Function ขึ้นมา รับค่า  order , menutype และglass 
//ถ้ามี function ต้องมี return ค่าออกไป 
//ถ้ามีเวลา ให้ลองเขียนเทส ดูด้วย นะจ๊ะ  

function orderCustomer(order, menutype , glass ) {

// let order = "ชาเขียว";
// let menutype = "เย็น";
// let glass = "" ;
let  priceOrder = "";
    switch (order) {
        case "ชาเขียว": 
            priceOrder = 55 ;           
            // console.log (priceOrder);
      
            break;

        case "โกโก้" :
            priceOrder = 45 ;
             
            break;
        case "อเมริกาโน่" :
            priceOrder = 50 ;
         
            break;
        default :
            order = "ลาเต้"
            priceOrder = 35 ;
            // ถ้าลูกค้าใส่เป็น ค่าว่างมา ให้ default ค่าเมนู เป็นลาเต้

    }                           

    switch (menutype) {
        case "เย็น": 
            priceType = 5 ;
           
            break;   
        default :
            priceType = 0 ;

    }

    switch (glass) {
        case "นำแก้วมา": 
            priceDiscount = 5 ;
     
       
            break;   
        default :
            priceDiscount = 0 ;
        
          
            break;   

    }
    let totalPrice = 0;
    totalPrice = (priceOrder+ priceType ) - priceDiscount ;
    // console.log ("เมนู" + order + " " +menutype + " " + glass + "ราคา " + totalPrice + " บาท" );
    return  "เมนู" + order + " " +menutype + " " + glass + "ราคา " + totalPrice + " บาท" ;
}

//ลองเรียกใช้ Function 
// orderCustomer ("ชาเขียว", "เย็น", "นำแก้วมา") ;
// orderCustomer ("ชาเขียว", "เย็น", "ไม่ได้นำแก้วมา") ;
// orderCustomer ("โกโก้", "เย็น", "ไม่ได้นำแก้วมา") ;
// orderCustomer ("", "เย็น", "ไม่ได้นำแก้วมา") ;

module.exports = orderCustomer;
