import { MysqlConnectionFactory, Context } from './'


export abstract class UnitOfWork
{
    static begin(factory : MysqlConnectionFactory) : Promise<Context>
    {
        return new Promise((resolve, reject)=> {
            let context = factory.getConnection()
            context.connection.beginTransaction((error : Error)=> {
                if(error) { reject(error) }

                resolve(context)
            })
        })
    }
}
