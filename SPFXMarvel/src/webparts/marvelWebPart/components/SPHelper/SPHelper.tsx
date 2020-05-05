import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";

export class SPHelper {

    public static addFile(nome: string, tipo: string, scelta: string, url: string) {

        const listItem = {
            NomePersonaggio: nome,
            Tipo: tipo,
            Avengers: scelta,
        };

        return sp.web.getFolderByServerRelativePath(url).files.add(listItem.NomePersonaggio + '.json', JSON.stringify(listItem))
            .then((value) => { return true; })
            .catch((err) => {
                console.error(err);
                return false;
            });
    }


    public static readListItem(url: string, nome: string) {

        return sp.web.getFolderByServerRelativePath(url).files.getByName(nome + '.json').getJSON()
            .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }

    public static writeListItem(nome: string, tipo: string, scelta: string) {

        return sp.web.lists.getByTitle("DettagliPG").items.add({
            Title: nome,
            Tipo2: tipo,
            Scelta: scelta
        })
            .then((value) => { return true; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }



}