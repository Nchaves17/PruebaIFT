
import {ResponseModel} from './../models/ResponseModel';
import {CosmosServices} from './cosmos-services'
import {Output} from './../utils/output';

export class enviaDatosServices{

    async enviarDatos(newDato: Object):Promise<ResponseModel>{
        try {
            let db = new CosmosServices();
            let res = await db.enviarDatos(newDato);
            if (!res.error){
                return Output.ok(res);
            }
            return Output.error('Error en el almacenamiento');
        } catch (error) {
            return Output.internalError();
        }
        
    }

}