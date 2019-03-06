import { MysqlConnectionFactory, UnitOfWork, Context } from './../'
import { GetUserQuery } from './queries'
import { SaveUserCommand, SaveCarCommand } from './commands'

import { User, Car } from './models'

let factory = new MysqlConnectionFactory('127.0.0.1', 'playground_db', 'admin', 'root', 32778)

// console.log(factory.getConnection())

// let query = new GetUserQuery(factory.getConnection())
// query.execute().then((result)=> {
//     console.log(result.retrive())
// }).catch((error)=> {
//     console.log(error)
// })


const execute = async (factory : MysqlConnectionFactory)=> {
    // let user = new User(1, 'Mihai', 29)
    //
    // let command = new SaveUserCommand(factory.getConnection())
    // await command.execute(user)
    //
    // let query = new GetUserQuery(factory.getConnection())
    // return await query.execute()

    return UnitOfWork.begin(factory).then(async (context : Context)=> {
        try {
            let user = new User(1, 'Mihai', 29)

            let mercedes  = new Car('Mercedes', 5, 25000, 1)
            let renault   = new Car('Renault', 3, 15000, 1)

            let saveUser = new SaveUserCommand(context)
            await saveUser.execute(user)

            let saveCar = new SaveCarCommand(context)
            await saveCar.execute(mercedes)
            await saveCar.execute(renault)

            let query = new GetUserQuery(context)
            let users = await query.execute()

            context.complete()
            return users
        } catch(error) {
            console.log(error)
            context.rollback()
        }
    })
}

execute(factory).then((result : any)=> {
    console.log(result.retrive())
}).catch((error)=> {
    console.log(error)
})
