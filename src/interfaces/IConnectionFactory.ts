import { Connection } from 'mysql'
import { Context } from './../'


interface IConnectionFactory
{
    getConnection() : Context
}

export default IConnectionFactory
