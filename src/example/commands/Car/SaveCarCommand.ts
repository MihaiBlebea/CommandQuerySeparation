import { Context } from './../../../'
import { Car } from './../../models'
import CarMap from './CarMap'

/*
    This command inserts a User model into the users table
*/

export default class SaveCarCommand
{
    private context : Context


    constructor(context : Context)
    {
        this.context = context
    }

    async execute(car : Car)
    {
        let values = Object.values(CarMap.deconstruct(car))
        await this.context.query(`INSERT INTO cars (user_id, brand, doors, price) VALUES (?)`, [values])
        return null
    }
}
