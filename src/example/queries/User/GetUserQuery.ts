import { Context } from './../../../'
import UserResult from './UserResult'

/*
    This query fetches all the users from the users table
*/

export default class GetUserQuery
{
    private context : Context


    constructor(context : Context)
    {
        this.context = context
    }

    async execute()
    {
        let rows =  await this.context.query(`SELECT * FROM users`)
        return new UserResult(rows)
    }
}
