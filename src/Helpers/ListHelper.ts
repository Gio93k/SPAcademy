import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export class ListHelper {


    public static getList() {
        // get all the items from a list

        //const items: any[] = await sp.web.lists.getByTitle("My List").items.get()
        return sp.web.lists.getByTitle("ListaProva").items.get()
            .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }

}