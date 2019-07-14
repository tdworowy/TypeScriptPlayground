
interface registeredClasses {
    [Key: string]: any
}

export class ServiceLocator {
    static registeredClasses : any[] = new Array();
    public static register(
      interfaceName: string, instance: any) 
    {
      this.registeredClasses[<any>interfaceName] = instance;
    }
    public static resolve(
      interfaceName: string) 
    {
      return this.registeredClasses[<any>interfaceName];
    }
  }
  
  export class ServiceLocatorGeneric {
    static registeredClasses : any[] = new Array();
    public static register<T>(t: { new (): T; }, instance: any) {
      let interfaceInstance:any = new t();
      let interfaceName =interfaceInstance.constructor.name;
      console.log(`ServiceLocator - register: ${interfaceName}`);
      this.registeredClasses[interfaceName] = instance;
    }
    public static resolve<T>(t: { new (): T; }) {
      let interfaceInstance:any = new t();
      let interfaceName = interfaceInstance.constructor.name;
      console.log(`ServiceLocator - resolve: ${interfaceName}`);
      return this.registeredClasses[interfaceName];
    }
  }