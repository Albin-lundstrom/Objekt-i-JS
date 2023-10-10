class Car{
    constructor(car, model, price, year, img){
        this.car = car;
        this.model = model;
        this.price = price;
        this.year = year;
        this.img = img;
    }
}

let bmw1 = new Car("BMW", "Bmw 1", "4 Dabloons", 2004, "https://upload.wikimedia.org/wikipedia/commons/1/11/DTM_1993_Marco_Werner_BMW.svg")
let audi = new Car("Audi", "Audi r8", "2 Dabloons", "Igår", "https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg")
let catcar = new Car("Cat in a car", "Car on a cat", "8 Dabloons", 1998, "https://c.pxhere.com/photos/ba/2d/cute_car_cat_kitten_feline_sweet_tabby_domestic-143624.jpg!d")
let george = new Car("This is George", "Georges car", "2 Dabloons", "Imorgon", "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4NS0xNTQucG5n.png?s=JmByNNTdg3yMCXs0G9QO0D2cvDOqaWMx6HL9RxeasMA")
let icavagn = new Car("ICA", "Ica vagn", "7 Dabloon", 2004, "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyNy0yMDQtcC5wbmc.png")
let madagaskar = new Car("I don't know", "Cars", "9 Dabloons", 1337, "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL2pvYjk3MS1lbGVtZW50LTIwMl8yLnBuZw.png")
let huh = new Car("huh", "huh", "huh", "huh", "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgyLTI2Ny1wLnBuZw.png?s=HkskhjXsr4Qf_r5T2OA3txm_as5JhLEhCAO_sRyQidg")


carsArry = [bmw1, audi, catcar, george, icavagn, madagaskar, huh]

console.log(bmw1)

cars2Elm = document.getElementById("cars2")


let carItems = ""
    for (let i = 0; i < carsArry.length; i++){
    carItems += `
                <div>
                    <img src="${carsArry[i].img}" alt="car" class="img-thumbnail img-fluid">
                    <h1>
                        <u>
                        ${carsArry[i].car}
                        </u>
                    </h1>
                    <p>
                        Model: ${carsArry[i].model}
                    </p>
                    <p>
                        Price: ${carsArry[i].price}
                    </p>
                    <p>
                        Year: ${carsArry[i].year}
                    </p>
                </div>
    `
    }
cars2Elm.innerHTML = carItems