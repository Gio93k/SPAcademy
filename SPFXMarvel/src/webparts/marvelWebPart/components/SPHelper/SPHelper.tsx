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

    public static writeListItem(nome: string, tipo: string, scelta: string, nomeLista: string) {

        return sp.web.lists.getByTitle(nomeLista).items.add({
            Title: nome,
            Tipo2: tipo,
            Avengers: scelta
        })
            .then((value) => { return true; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }


    public static readListItem2(nomeLista: string) {
        return sp.web.lists.getByTitle(nomeLista).items
            .expand("File")
            .select("Label", "File/ServerRelativeUrl", "File/Name")
            .get()
            .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }

    public static readListItemImg(nomeLista: string, Label: string) {
        return sp.web.lists.getByTitle(nomeLista).items
            .select("Title", "Tipo2", "Avengers", "Label")
            .filter("Label eq '" + Label + "' ")
            .get()
            .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }



}