import {CosmosClient} from '@azure/cosmos';
import { environment } from '../../environment/environment';

export class CosmosServices{

    private client;
    private database;
    private container;

    constructor(){
        let endpoint = environment.endpoint, key= environment.key;
        console.log(environment);
        this.client = new CosmosClient({endpoint, key});
        this.database = this.client.database(environment.databaseId);
        this.container = this.database.container(environment.containerId);
    }
    async enviarDatos(newDato : object): Promise<{error: boolean, result: string, createdItem: any}>{
        try {
            const{resource : createdItem} = await this.container.items.create(newDato);
            return {error: false, result: 'Operacion almacenada', createdItem};
        } catch (error) {
            console.log(error);
            return {error: true, result: 'Error en el almacenamiento', createdItem:{}};
        }
    }

}