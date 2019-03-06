import { createConnection } from 'mysql'
import { IConnectionFactory, Context } from './'


export default class MysqlConnectionFactory implements IConnectionFactory
{
    private host : string

    private database : string

    private user : string

    private password : string

    private port : number


    constructor(host : string, database : string, user : string, password : string, port? : number)
    {
        this.host     = host
        this.database = database
        this.user     = user
        this.password = password
        this.port     = port || 3306
    }

    getConnection()
    {
        let connection = createConnection({
            host:     this.host,
            user:     this.user,
            database: this.database,
            password: this.password,
            port:     this.port
        })
        return new Context(connection)
    }
}
