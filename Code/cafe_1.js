function sayHelloCustomer (customerName) {

    if (customerName === "" ){
        return "สวัสดีค่ะ คุณลูกค้า รับอะไรดีคะ";

        }
        return "สวัสดีค่ะ" +" "+ customerName+ " "+"วันนี้รับอะไรดีคะ";
    }
    
    console.log(sayHelloCustomer());

    function noticeOrderMessage (customerName, statusOrder, menu) {

        if (statusOrder === "In Process" ){
            return menu +" "+ "ของคุณ "+customerName +" "+ "กำลังทำอยู่นะคะ กรุณารอสักครู่ค่ะ";
    
        }else if (statusOrder === "Success"){
            return menu +" "+ "ของคุณ "+ customerName+ " "+"เสร็จแล้ว เชิญรับได้ที่เค้าเตอร์ค่ะ";
        }
            return "กำลังทำ"+ menu + " ของคุณ " + customerName +" "+"อยู่นะคะ กรุณารอสักครู่ค่ะ"
    }
        
        console.log(noticeOrderMessage());
        
        //กรณีที่มีการส่ง ไป 2 function
module.exports = {sayHelloCustomer, noticeOrderMessage};
