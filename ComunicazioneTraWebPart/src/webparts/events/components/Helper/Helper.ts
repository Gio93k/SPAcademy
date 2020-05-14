import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";

export class SPHelper {


    public static getItemFromList(nomeLista: string) {
        //load information about events from the SharePoint list
        return sp.web.lists.getByTitle(nomeLista).items.getAll()
            .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });

    }

}