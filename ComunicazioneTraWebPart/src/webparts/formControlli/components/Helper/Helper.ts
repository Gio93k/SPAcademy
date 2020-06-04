import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";

export class Helper {



    public static writeListItem(nome: string, cognome: string, Data: string, Email: string, nomeLista: string) {

        return sp.web.lists.getByTitle(nomeLista).items.add({
            FirstName: nome,
            Title: cognome,
            Email: Email,
            Data: Data
        })
            .then((value) => { return true; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }









}