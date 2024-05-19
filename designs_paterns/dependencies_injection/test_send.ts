import { GMailService, IGMailService, IIGMailService } from "./SimpleMailer";
import { ServiceLocatorGeneric } from "./ServiceLocator";
import { IISystemSettings } from "./ISystemSettings";
import { ConstructorInject } from "./ConstructorInject";

ServiceLocatorGeneric.register(IISystemSettings, {
  SmtpServerConnectionString: "smtp://localhost:1025",
  SmtpFromAddress: "smtp_from@test.com",
});

ServiceLocatorGeneric.register(IIGMailService, new GMailService());

@ConstructorInject
class MailSender {
  private gMailService!: IGMailService;
  constructor(gMailService?: IIGMailService) {}
  async sendWelcomeMail(to: string) {
    await this.gMailService.sendMail(to, "Hello!", "");
  }
}

let mailSender = new MailSender();
mailSender.sendWelcomeMail("tTestAccouny123321@gmail.com");
