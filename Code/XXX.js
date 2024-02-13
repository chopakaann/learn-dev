function totalPrice(orderMenu, typeDrink, saveEarth) {
    switch(orderMenu) {
        case "เอสเปรสโซ่":
            priceOrderMenu = 55
            break;
        case "อเมริกาโน่":
            priceOrderMenu = 50
            break;
        case "คาปูชิโน่":
            priceOrderMenu = 60
            break;
        case "มอคค่า":
            priceOrderMenu = 60
            break;
        case "ลาเต้":
            priceOrderMenu = 60
            break;
        case "คาราเมลมัคคิอาโต้":
            priceOrderMenu = 65
            break;
        case "นมสด":
            priceOrderMenu = 50
            break;
        case "มัทฉะ":
            priceOrderMenu = 60
            break;
        case "โกโก้":
            priceOrderMenu = 60
            break;
        case "ชาไทย":
            priceOrderMenu = 55
            break;
        case "นมชมพู":
            priceOrderMenu = 55
            break;
    }

    switch(typeDrink) {
        case "เย็น":
            priceTypeDrink = 5
            break;
        default:
            priceTypeDrink = 0
            break;
    }

    switch(saveEarth){
        case "นำแก้วมาเอง":
            priceSaveEarth = 5
            break;
        default:
            priceSaveEarth = 0
            break;
        }
        console.log(orderMenu + typeDrink + saveEarth + " ราคา " + ((priceOrderMenu + priceTypeDrink) - priceSaveEarth) + " บาท ")
        }

totalPrice("ชาไทย", "เย็น", "นำแก้วมาเอง")
