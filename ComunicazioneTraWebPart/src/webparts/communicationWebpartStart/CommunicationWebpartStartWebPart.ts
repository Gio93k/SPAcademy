import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CommunicationWebpartStartWebPartStrings';
import CommunicationWebpartStart from './components/CommunicationWebpartStart';
import { ICommunicationWebpartStartProps } from './components/ICommunicationWebpartStartProps';

export interface ICommunicationWebpartStartWebPartProps {
  description: string;
}

export default class CommunicationWebpartStartWebPart extends BaseClientSideWebPart <ICommunicationWebpartStartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICommunicationWebpartStartProps> = React.createElement(
      CommunicationWebpartStart,
      {
        description: this.properties.description
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
