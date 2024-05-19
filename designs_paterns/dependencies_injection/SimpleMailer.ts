import * as nodemailer from "nodemailer";
import { ISystemSettings, IISystemSettings } from "./ISystemSettings";
import { ServiceLocator } from "./ServiceLocator";
import { ConstructorInject } from "./ConstructorInject";

@ConstructorInject
export class GMailService {
  private transporter: nodemailer.Transporter;
  private settings!: ISystemSettings;

  constructor(_settings?: IISystemSettings) {
    this.transporter = nodemailer.createTransport(
      this.settings.SmtpServerConnectionString
    );
  }

  sendMail(to: string, subject: string, text: string) {
    let mailOptions = {
      from: this.settings.SmtpFromAddress, //'from_test@gmail.com',
      to: to,
      subject: subject,
      text: text,
    };
    return new Promise<void>(
      (resolve: (msg: any) => void, reject: (err: Error) => void) => {
        this.transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(`error: ${error}`);
            reject(error);
          } else {
            console.log(`Message Send: ${info.response}`);
            resolve(`${info.response}`);
          }
        });
        setTimeout(() => {
          console.log("Time Out");
        }, 3000);
      }
    );
  }
}
export interface IGMailService {
  sendMail(to: string, subject: string, content: string): Promise<void>;
}
export class IIGMailService {}
