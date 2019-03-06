import { IQueryResult } from './../../../'
import { User } from './../../models'


export default class UserResult implements IQueryResult<User>
{
    private rows : { [key : string] : any }[]

    constructor(rows : { [key : string] : any }[])
    {
        this.rows = rows
    }

    retrive()
    {
        return this.rows.map((row)=> {
            return new User(row.job_id, row.name, row.age, row.id)
        })
    }
}
