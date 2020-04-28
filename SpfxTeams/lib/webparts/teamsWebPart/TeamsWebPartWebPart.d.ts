import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
export interface ITeamsWebPartWebPartProps {
    description: string;
    _context: WebPartContext;
}
export default class TeamsWebPartWebPart extends BaseClientSideWebPart<ITeamsWebPartWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TeamsWebPartWebPart.d.ts.map