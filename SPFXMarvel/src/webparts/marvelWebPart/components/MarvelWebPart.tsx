import * as React from 'react';
import styles from './MarvelWebPart.module.scss';
import { IMarvelWebPartProps } from './IMarvelWebPartProps';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { SPHelper } from '../components/SPHelper/SPHelper';

export interface IMarvelWebPartPropsState {
  showDetailsPanel: boolean;
  nome: string;
  tipo: string;
  scelta: string;
}
function DettagliPersonaggio(props) {
  if (!props.warn) return null;
  return (
    <div>
      Dettagli personaggio!!
    </div>
  )
}
export default class MarvelWebPart extends React.Component<IMarvelWebPartProps, IMarvelWebPartPropsState> {

  constructor(props) {
    super(props);
    this.state = {
      showDetailsPanel: false,
      nome: '',
      tipo: '',
      scelta: ''
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);

    //  se uso il this all'interno di un " => " il contesto si riferisce a dove la funzione viene definita e 
    // non dove viene chiamata, esattamente come si comporta il bind() nel 
    // " this.handleToggleClick = this.handleToggleClick.bind(this);" , sta indicando che quando chiamo la funzione 
    // handleToggleClick dal'onClick dell html il this non si deve riferire al contesto di dove lo sto chiamando ma 
    //a quello in cui ho definito la funzione

    this.handleChangeTipo = this.handleChangeTipo.bind(this);
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeScelta = this.handleChangeScelta.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTipo(event) {
    this.setState({ tipo: event.target.value });
  }

  handleChangeNome(event) {
    this.setState({ nome: event.target.value });
  }

  handleChangeScelta(event) {
    this.setState({ scelta: event.target.value });
  }

  handleToggleClick(event) {
    this.setState(state => ({
      showDetailsPanel: !state.showDetailsPanel
    }));

  }

  async handleSubmit(event) {
    let url = "/sites/Gioara/Doc";
    event.preventDefault();
    const item = await SPHelper.postListItem(this.state.nome, this.state.tipo, this.state.scelta, url);
  }

  public render(): React.ReactElement<IMarvelWebPartProps> {

    const iron_img: any = require('../assets/portrait/iron_man.png'); // importa l'immagine da visualizzare
    return (
      <div className={styles.marvelWebPart}>

        <img src={iron_img} alt="iron_man" width="150" height="150" onClick={this.handleToggleClick} />
        <DettagliPersonaggio warn={this.state.showDetailsPanel} />
        <br />  <br />  <br />  <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Inserisci un Personaggio:
          </label>
            <br />
          </div>
          <label>
            Nome:
          <input
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.handleChangeNome}
            />
          </label>
          <br />
          <label>
            Tipo:
          <input
              name="tipo"
              type="text"
              value={this.state.tipo}
              onChange={this.handleChangeTipo}
            />
          </label>
          <br />
          <label>
            Avengers:
            <select onChange={this.handleChangeScelta}>
              <option value="si" >Si</option>
              <option value="no" >No</option>

            </select>
          </label>
          <br />
          <input type="submit" value="Salva" />
        </form>

      </div>

    );
  }
}
