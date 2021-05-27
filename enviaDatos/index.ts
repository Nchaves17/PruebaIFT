import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import{enviaDatosServices} from "./../src/services/enviaDatos-services";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const guardaDatos =(req.body && req.body.guardaDatos);
    context.res = await new enviaDatosServices().enviarDatos(guardaDatos);

};

export default httpTrigger;