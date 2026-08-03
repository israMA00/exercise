
class Vehicle {

    #brand = '';
    #model = '';
    #speed = 0

    constructor(brand, model, speed){

        if(new.target === Vehicle){
            throw new Error('Vehicle class cannot be instantiated directly');
        }
        
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }

    set brand(newBrand){

        if(typeof newBrand !== 'string' || newBrand.trim().length === 0){
            throw new Error('Invalid brand');
        }
        this.#brand = newBrand;
    }
    get brand() {
        return this.#brand;
    }

    set model(newModel) {
        if(typeof newModel !== 'string' || newModel.trim().length === 0){
            throw new Error('Invalid model');
        }
        this.#model= newModel;
    }
    get model(){
        return this.#model;
    }

    set speed(newSpeed){


        if(typeof newSpeed === 'string' || newSpeed.trim() === ''){
            throw new Error('Invalid speed');
        }

        const convertedSpeed = Number(newSpeed); 
        //valores que no se pudieron convertirse a numero como Number('abc', {}, undefined)

        if(
            !Number.isInteger(convertedSpeed) || 
            //entra este validación
            Number.isNaN(convertedSpeed) || 
            convertedSpeed < 0 || 
            convertedSpeed > 500
        ){
            throw new Error('Invalid speed')
        }

        this.#speed = convertedSpeed;
    }
    get speed(){
        return this.#speed
    }

    accelerate(amount){

        if(typeof amount === 'string' || amount.trim() === ''){
            throw new Error('Invalid Amount');
        }


        const convertedAmount = Number(amount);

        if(
            Number.isNaN(convertedAmount) ||
            !Number.isInteger(convertedAmount) || 
            convertedAmount < 0 || 
            convertedAmount > 500
        ){
            throw new Error('Invalid amount');
        }


        if(this.#speed + convertedAmount > 500){
            throw new Error('Maximum speed reached');
        }


        this.#speed += convertedAmount;

    }

    brake(amount){

        if(typeof amount === 'string' || amount.trim() === ''){
            throw new Error('Invalid amount');
        }

        const convertedAmount = Number(amount);

        if(
            Number.isNaN(convertedAmount) ||
            !Number.isInteger(amount) || 
            convertedAmount < 0 || 
            convertedAmount > 500
        ){
            throw new Error('Invalid amount');
        }

        if(this.#speed - convertedAmount < 0){
            throw new Error('Minimum speed reached');
        }

        this.#speed -= convertedAmount;

    }

    get info(){
        return {
            brand: this.#brand,
            model: this.#model,
            speed: this.#speed
        }
    }

    calculateConsume(){
        throw new Error('Subclass must use this method');
    }

}






