// Method decorator to log method calls
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Method ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
  }
  
  // Property decorator to add metadata
  function LogProperty(target: any, propertyKey: string) {
    let value: any;
    const getter = () => {
      console.log(`Getting value of ${propertyKey}: ${value}`);
      return value;
    };
    const setter = (newValue: any) => {
      console.log(`Setting value of ${propertyKey} to: ${newValue}`);
      value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
  
  class Product {
    @LogProperty
    name!: string;
  
    @LogMethod
   
  