import { MSGraphClient, MSGraphClientFactory } from '@microsoft/sp-http';
//import { User } from '@microsoft/microsoft-graph-types';
//import { graph } from '@pnp/graph';
import '@pnp/graph/users';


export class GraphHelper {
    private static client: MSGraphClient;
    public static async init(clientFactory: MSGraphClientFactory) {
        return clientFactory.getClient().then((client) => {
            GraphHelper.client = client;
            return undefined;
        })
            .catch((err) => {
                return err;
            });

    }

    // public static postListItem(titolo:string, autore:string, prezzo:number, pagine:number, url:string) {

    //     const listItem = {
    //         TitoloLibro: titolo,
    //         Autore: autore,
    //         Prezzo: prezzo,
    //         NumeroPagine: pagine,  
    //       };

    //     return GraphHelper.client.api("sites/3f4678ca-0966-4258-8fc3-dc843fc39430/Lists/5bc3c7c6-af24-4236-8570-65c7d3df3bfa/items")
    //     .post(listItem)
    //         .then((value) => { return value; })
    //         .catch((err) => {
    //             console.error(err);
    //             return undefined;
    //         });
    // }
}