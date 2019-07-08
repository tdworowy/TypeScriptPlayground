import { ISystemSetings, GMailService} from "./simple_mailer"
import { ServiceLocator } from './ServiceLocator'

let smtpSinkSettings: ISystemSetings = {
    SmtpServerConnectionString: 'smtp://localhost:1025',
    SmtpFromAddress: "smpt_from@test.com"
}
//Register
ServiceLocator.register('ISystemSetings',smtpSinkSettings)
//Get registered
let currentSetings:ISystemSetings = ServiceLocator.resolve('ISystemSetings')

let gmailService = new GMailService(currentSetings)
gmailService.sendMail(
    "TestAccouny123321@gmail.com",
    "Test",
    "TestMessage"
).then ((msg:any) => {
    console.log(`${msg}`)
})