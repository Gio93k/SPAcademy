import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";

export class SPHelper {

    public static postListItem(titolo:string, autore:string, prezzo:number, pagine:number, url:string) {

        const listItem = {
            TitoloLibro: titolo,
            Autore: autore,
            Prezzo: prezzo,
            NumeroPagine: pagine,  
          };

        return sp.web.getFolderByServerRelativePath(url).files.add('Libro.json' , JSON.stringify(listItem))
        .then((value) => { return true; })
            .catch((err) => {
                console.error(err);
                return false;
            });
    }


    public static readListItem(url:string) {

        return sp.web.getFolderByServerRelativePath(url).files.getByName('Libro.json').getJSON()
        .then((value) => { return value; })
            .catch((err) => {
                console.error(err);
                return undefined;
            });
    }
}


