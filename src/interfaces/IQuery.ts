interface IQuery<T>
{
    execute(filters? : { [key : string] : any }) : Promise<T[]>
}

export default IQuery
