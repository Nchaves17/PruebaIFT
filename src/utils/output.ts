import { ResponseModel } from './../models/ResponseModel';
export class Output<T> {

  success: boolean = true;

  data: T;

  message: string;

  dateTime = new Date().toISOString();

  errorCod: number;

  static out(status: number, body: any): ResponseModel {
    return {
      status,
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    };
  }

  static ok(data?: any) {
    const output = new Output();

    output.message = "Todas las políticas se cumplieron";
    if (typeof data === 'object') {
      if (data != null) output.data = data;
    }
    output.errorCod = 0;
    return this.out(200, output);
  }

  static internalError(message: string = 'There are some errors.', data?: any) {
    const output = new Output();

    output.success = false;

    if (message) output.message = message;
    if (data) output.data = data;
    output.errorCod = 600;
    return this.out(500, output);
  }

  static error(message: string, data?: any) {
    const output = new Output();

    output.success = false;
    output.message = message;

    if (data) output.data = data;
    output.errorCod = 600;
    return this.out(400, output);
  }

  static badRequest(message: string = 'Ok', data?: any) {
    const output = new Output();
    
    output.success = false;
    output.message = message;
      if (data != null) output.data = data;
    output.errorCod = 600;
    return this.out(400, output);
}

  static unauthorized() {
    const output = new Output();

    output.success = false;
    output.errorCod = 600;
    return this.out(401, output);
  }

}