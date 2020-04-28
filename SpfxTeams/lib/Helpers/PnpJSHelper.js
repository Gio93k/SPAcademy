import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";
var SPHelper = /** @class */ (function () {
    function SPHelper() {
    }
    SPHelper.postListItem = function (titolo, autore, prezzo, pagine, url) {
        var listItem = {
            TitoloLibro: titolo,
            Autore: autore,
            Prezzo: prezzo,
            NumeroPagine: pagine,
        };
        return sp.web.getFolderByServerRelativePath(url).files.add('Libro.json', JSON.stringify(listItem))
            .then(function (value) { return true; })
            .catch(function (err) {
            console.error(err);
            return false;
        });
    };
    SPHelper.readListItem = function (url) {
        return sp.web.getFolderByServerRelativePath(url).files.getByName('Libro.json').getJSON()
            .then(function (value) { return value; })
            .catch(function (err) {
            console.error(err);
            return undefined;
        });
    };
    return SPHelper;
}());
export { SPHelper };
//# sourceMappingURL=PnpJSHelper.js.map