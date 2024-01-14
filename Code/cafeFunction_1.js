//ถ้าต้องการ รับค่า Parameter หลายๆค่า ให้ใช้ , คั่น
function sayWelcome(shopName,customer){

    console.log("สวัสดีค่ะ คุณ"+" "+ customer + " "+ "ยินดีต้องรับ เข้าสู่ร้าน" + " " +shopName +"ค่ะ");
}

function sayOrderReady(customerName){

    console.log("เครื่องดื่ม ของคุณ"+" " + customerName + " "+ "ได้รับแล้วนะคะ");
}

sayWelcome("Enjoy Cafe","Beer");
sayOrderReady("Beer");

sayWelcome("Enjoy Cafe","Nan");
sayOrderReady("Nan");
