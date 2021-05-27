export interface ResponseModel{
    status: number;
    body:any;
    headers:HeadersModel;
    }
    
    interface HeadersModel{
    'Content-Type': string
    }