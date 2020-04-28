import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName
} from '@microsoft/sp-application-base';

import Menu from './Components/menu';
import MenuHeader from './Components/MenuHeader';

import * as strings from 'FooterHeaderGioaraApplicationCustomizerStrings';
import * as ReactDom from 'react-dom';
import { setup as pnpSetup } from "@pnp/common";

import * as React from 'react';
const LOG_SOURCE: string = 'FooterHeaderGioaraApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFooterHeaderGioaraApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FooterHeaderGioaraApplicationCustomizer
  extends BaseApplicationCustomizer<IFooterHeaderGioaraApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    
    //  other init code may be present
      pnpSetup({
        spfxContext: this.context
      });
  

    var topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
    
    var BottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); //sono invertiti

    const element: React.ReactElement = React.createElement(
      Menu,
      {

      }
    );
    const header: React.ReactElement = React.createElement(
      MenuHeader,
      {

      }
    );
    ReactDom.render(element, topPlaceholder.domElement);
    ReactDom.render(header, BottomPlaceholder.domElement);
    
    return Promise.resolve();
  }
}
