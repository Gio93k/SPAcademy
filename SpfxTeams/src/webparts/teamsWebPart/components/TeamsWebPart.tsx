import * as React from 'react';
import styles from './TeamsWebPart.module.scss';
import { ITeamsWebPartProps } from './ITeamsWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GraphHelper } from '../../../Helpers/GraphHelper';
import { SPHelper } from '../../../Helpers/PnpJSHelper';


export interface ITeamsWebPartState {
  titolo: any;
  autore: any;
  prezzo: any;
  numero_pagine: any;
}

export default class TeamsWebPart extends React.Component<ITeamsWebPartProps, ITeamsWebPartState> {
  
  constructor(props) {
    super(props);
    this.state = {
      titolo: '',
      autore: '',
      prezzo: '',
      numero_pagine: ''
    };

    this.handleChangeTitolo = this.handleChangeTitolo.bind(this);
    this.handleChangeAutore = this.handleChangeAutore.bind(this);
    this.handleChangePrezzo = this.handleChangePrezzo.bind(this);
    this.handleChangePagine = this.handleChangePagine.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public async componentDidMount() {
    const item = await SPHelper.readListItem(this.props._context.sdks.microsoftTeams.context.channelRelativeUrl);
    if(item != undefined)
     this.setState({titolo: item.TitoloLibro, autore: item.Autore, prezzo: item.Prezzo, numero_pagine: item.NumeroPagine});
  }

  handleChangeTitolo(event) {
    this.setState({titolo: event.target.value});
  }

  handleChangeAutore(event) {
    this.setState({autore: event.target.value});
  }

  handleChangePrezzo(event) {
    this.setState({prezzo: event.target.value});
  }

  handleChangePagine(event) {
    this.setState({numero_pagine: event.target.value});
  }

  public async handleSubmit(event) {
    alert('E\' stato inserito il libro: ' + this.state.titolo + ', Autore: ' + this.state.autore + ', Prezzo ' +
    this.state.prezzo + ' Euro, Numero Pagine: ' + this.state.numero_pagine);
    event.preventDefault();

    const item = await SPHelper.postListItem(this.state.titolo,this.state.autore,this.state.prezzo,
      this.state.numero_pagine, this.props._context.sdks.microsoftTeams.context.channelRelativeUrl);

  }

  public render(): React.ReactElement<ITeamsWebPartProps> {
    
  let title: string = '';
  let subTitle: string = '';
  let siteTabTitle: string = '';
 
  if (this.props._context.sdks.microsoftTeams) {
    // We have teams context for the web part
    title = "Welcome to Teams!";
    subTitle = "Building custom enterprise tabs for your business.";
    siteTabTitle = "We are in the context of following Team: " + this.props._context.sdks.microsoftTeams.context.teamName;
  }
  else
  {
    // We are rendered in normal SharePoint context
    title = "Welcome to SharePoint!";
    subTitle = "Customize SharePoint experiences using Web Parts.";
    siteTabTitle = "We are in the context of following site: " + this.props._context.pageContext.web.title;
  }

    return (
    <div className={ styles.teamsWebPart }>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
        <span className={ styles.title }>{title}</span>
        <p className={ styles.subTitle }>{subTitle}</p>
        <p className={ styles.description }>{siteTabTitle}</p>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>  
             Inserisci un libro:
          </label> 
          <br />  
          </div> 
        <label>
          Titolo Libro:
          <input
            name="titolo"
            type="text"
            value={this.state.titolo}
            onChange={this.handleChangeTitolo}
          />
        </label>
        <br />
        <label>
          Autore:
          <input
            name="autore"
            type="text"
            value={this.state.autore}
            onChange={this.handleChangeAutore}
          />
        </label>
        <br />
        <label>
          Prezzo:
          <input
            name="prezzo"
            type="number"
            value={this.state.prezzo}
            onChange={this.handleChangePrezzo}
          />
        </label>
        <br />
        <label>
          Numero Pagine:
          <input
            name="numero_pagine"
            type="number"
            value={this.state.numero_pagine}
            onChange={this.handleChangePagine}
          />
        </label>
        <br />
        <input type="submit" value="Salva" />
      </form>
      </div>
      </div>
      </div>   
    </div>
    );
  }
}
