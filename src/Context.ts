import { Connection } from 'mysql'


export default class Context
{
    private _connection : Connection


    constructor(connection : Connection)
    {
        this._connection = connection
    }

    async query(query : string, params? : any[]) : Promise<any>
    {
        return new Promise((resolve, reject)=> {
            this._connection.query(query, params, (error, result)=> {
                if(error) { return reject(error) }
                return resolve(result)
            })
        })
    }

    get connection()
    {
        return this._connection
    }

    rollback()
    {
        this._connection.rollback()
        this._connection.end()
    }

    complete()
    {
        this._connection.commit()
        this._connection.end()
    }
}
