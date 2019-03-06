import { Car } from './../../models'

export default abstract class CarMap
{
    static deconstruct(car : Car) : { [key : string] : any }
    {
        return {
            user_id: car.userId,
            brand: car.brand,
            doors: car.doors,
            price: car.price
        }
    }
}
