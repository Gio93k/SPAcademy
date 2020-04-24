import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';



export interface IHelloWorldWebPartProps {
  description: string;
  nome: string;
  cognome: string;
  sesso: string;
  dataDiNascita: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart <IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Identity Card</span>
  <p class="${ styles.subTitle }">Nome e Cognome: </p>
  <p class="${ styles.description }">${escape(this.properties.nome)}</p>

  <p class="${ styles.subTitle }">Luogo di Nascita: </p> 
  <p class="${ styles.description }">${escape(this.properties.cognome)}</p>

  <p class="${ styles.subTitle }">Sesso</p>
  <p class="${ styles.description }">${escape(this.properties.sesso)}</p>

  <p class="${ styles.subTitle }">Data di Nascita</p>
  <p class="${ styles.description }">${escape(this.properties.dataDiNascita)}</p>

      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
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
              
              PropertyPaneTextField('nome', {
                label: "Inserisci nome"    
              }),
              PropertyPaneTextField('cognome', {
                label: "Inserisci cognome"            
              }),
              PropertyPaneTextField('sesso', {
               label: "Sesso"              
              }),
              PropertyPaneTextField('dataDiNascita', {
                label: "Data di Nascita(dd/MM/yyyy)"            
               })
            ]
          }
        ]
      }
    ]
  };
}
}
