import { User } from './../../models'

export default abstract class UserMap
{
    static deconstruct(user : User) : { [key : string] : any }
    {
        return {
            job_id: user.getJobId(),
            name: user.getName(),
            age: user.getAge()
        }
    }
}
