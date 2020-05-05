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
      <p> {props.nomePersonaggio}</p>
      <p> {props.tipoPersonaggio}</p>
      <p> {props.avengers}</p>
    </div>
  )
}
export default class MarvelWebPart extends React.Component<IMarvelWebPartProps, IMarvelWebPartPropsState> {
  public url = "/sites/Gioara/Doc";
  constructor(props) {
    super(props);
    this.state = {
      showDetailsPanel: false,
      nome: '',
      tipo: '',
      scelta: 'si'
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

  async handleToggleClick(event) {
    let nomefile = event.currentTarget.alt;

    const returnfile = await SPHelper.readListItem(this.url, nomefile);

    // switch(nomefile)
    //   case iron_man.json:
    // }
    this.setState(state => ({
      showDetailsPanel: !state.showDetailsPanel,
      nome: returnfile.NomePersonaggio,
      tipo: returnfile.Tipo,
      scelta: returnfile.Avengers,
    }));
  }

  async handleSubmit(event) {

    event.preventDefault();
    const item = await SPHelper.addFile(this.state.nome, this.state.tipo, this.state.scelta, this.url);
    const itemL = await SPHelper.writeListItem(this.state.nome, this.state.tipo, this.state.scelta);
  }

  public render(): React.ReactElement<IMarvelWebPartProps> {

    const iron_img: any = require('../assets/portrait/iron_man.png'); // importa l'immagine da visualizzare
    const quake: any = require('../assets/portrait/quake.png'); // importa l'immagine da visualizzare
    const spiderman: any = require('../assets/portrait/spiderman.png'); // importa l'immagine da visualizzare

    return (
      <div className={styles.marvelWebPart}>
        <table>
          <tr>
            <th>  <img src={iron_img} alt="ironMan" width="150" height="150" onClick={this.handleToggleClick} />
            </th>
            <th><img src={quake} alt="quake" width="150" height="150" onClick={this.handleToggleClick} /></th>
            <th><img src={spiderman} alt="spiderman" width="150" height="150" onClick={this.handleToggleClick} /></th>
            <td>        <DettagliPersonaggio warn={this.state.showDetailsPanel} nomePersonaggio={this.state.nome} tipoPersonaggio={this.state.tipo} avengers={this.state.scelta} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div> </div>
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
            <select value={this.state.scelta} onChange={this.handleChangeScelta}>
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
