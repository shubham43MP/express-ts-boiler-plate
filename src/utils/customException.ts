class CustomException extends Error {
    public statusCode: number;
  
    constructor({ error, code }: { error: string; code: number }) {
      super(error);
      this.statusCode = code;
  
      // Set the prototype explicitly for proper inheritance in TypeScript
      Object.setPrototypeOf(this, CustomException.prototype);
    }
  }
  
  export default CustomException;
  