interface registeredClasses {
    [Key: string]: any
}
export class ServiceLocator {
    static registeredClasses: registeredClasses = {}
    public static register(
        interfaceName:string,
        instance:any)
        {
            this.registeredClasses[interfaceName] = instance
        } 
    public static resolve(interfaceName:string) {
            return this.registeredClasses[interfaceName]
        }
}