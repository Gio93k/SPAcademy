import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";
export declare class SPHelper {
    static postListItem(titolo: string, autore: string, prezzo: number, pagine: number, url: string): Promise<boolean>;
    static readListItem(url: string): Promise<any>;
}
//# sourceMappingURL=PnpJSHelper.d.ts.map