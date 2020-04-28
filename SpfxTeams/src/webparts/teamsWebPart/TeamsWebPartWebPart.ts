import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'TeamsWebPartWebPartStrings';
import TeamsWebPart from './components/TeamsWebPart';
import { ITeamsWebPartProps } from './components/ITeamsWebPartProps';
import { GraphHelper } from '../../Helpers/GraphHelper';
import { sp } from '@pnp/sp';

export interface ITeamsWebPartWebPartProps {
  description: string;
  _context:WebPartContext;
  //contesto: any;
}

export default class TeamsWebPartWebPart extends BaseClientSideWebPart <ITeamsWebPartWebPartProps> {

  public async onInit() {
    return super.onInit().then(async (_) => {

      sp.setup({
        spfxContext: this.context
      });
      // await PnpJSHelper.init(this.context.msGraphClientFactory);
      // return;
    });
  }

  public render(): void {
    const element: React.ReactElement<ITeamsWebPartProps> = React.createElement(
      TeamsWebPart,
      {
        description: this.properties.description,
        _context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
