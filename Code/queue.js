
//เรียกคิวลูกค้าที่ 230 
//ช่องบริการ  3
function callQueueCustomer(queueNumber, counterService){

    console.log("เชิญลูกค้า หมายเลข"+ " "+ queueNumber +" " + "ที่ช่องบริการ หมายเลข " + counterService);
   
}

callQueueCustomer(230, 3);
callQueueCustomer(231, 1);

//ถ้า ลูกค้า 1-4 ท่าน รับคิว A
//มากกว่า5 ท่าน รับคิว B 
function callReceiveQueue(amountCustomer, queue){
    console.log("ลูกค้า จำนวน " + amountCustomer +" ท่าน"+" " +  "กรุณา รับคิวบริการ " + queue);
}

callReceiveQueue(4, "A");
callReceiveQueue(8, "B");
callReceiveQueue(2, "A");
callReceiveQueue(5, "B");
