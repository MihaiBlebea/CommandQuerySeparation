import { Context } from './../../../'
import { User } from './../../models'
import UserMap from './UserMap'

/*
    This command inserts a User model into the users table
*/

export default class SaveUserCommand
{
    private context : Context


    constructor(context : Context)
    {
        this.context = context
    }

    async execute(user : User)
    {
        let values = Object.values(UserMap.deconstruct(user))
        await this.context.query(`INSERT INTO users (job_id, name, age) VALUES (?)`, [values])
        return null
    }
}
