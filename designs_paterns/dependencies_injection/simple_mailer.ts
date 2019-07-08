import * as nodemailer from 'nodemailer';

export interface ISystemSetings {
    SmtpServerConnectionString: string,
    SmtpFromAddress:string;
}

export class GMailService {
    private transporter: nodemailer.Transporter
    private settings:ISystemSetings
    
    constructor(settings:ISystemSetings) {
        this.settings = settings
        this.transporter= nodemailer.createTransport(
            this.settings.SmtpServerConnectionString
            //`smtps://TestAccouny123321%40gmail.com:testowehaslo@smtp.gmail.com`
        );
    }
    
    sendMail(to : string, subject :string,  text: string) {
        let mailOptions = {
            from :this.settings.SmtpFromAddress, //'from_test@gmail.com',
            to : to,
            subject : subject,
            text: text
        }
        return new Promise<void> (
            ( resolve: (msg:any) => void,
              reject:(err:Error) => void) => {
                this.transporter.sendMail( mailOptions, (error, info) => {
                    if (error) {
                      console.log(`error: ${error}`);
                      reject(error)
                    } else {
                        console.log(`Wysłano wiadomość: ${info.response}`);
                        resolve(`${info.response}`)
                    }
              })
              setTimeout(
                        ()=>{console.log("Time Out")}, 
                        3000)
             }
             
        ) 
    }
}