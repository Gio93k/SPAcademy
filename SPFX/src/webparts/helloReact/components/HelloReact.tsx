import * as React from 'react';
import styles from './HelloReact.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import {List , values} from 'office-ui-fabric-react';
import { DetailsList, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { GraphHelper } from '../../../Helpers/GraphHelper';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { User } from '@microsoft/microsoft-graph-types';
export interface IHelloReactProps {
  description: string;
}

export interface IDetailsListBasicExampleItem {
  titolo: String;
  autore: string;
  anno: number;
  pagine: number;
}

export interface IHelloReactState {
  items:IDetailsListBasicExampleItem[];
  user?: User;
}


export default class HelloReact extends React.Component<IHelloReactProps, IHelloReactState> {
  private _columns: IColumn[];
  private _allItems: IDetailsListBasicExampleItem[];

  constructor(props: IHelloReactProps){
    super(props);
    this.state ={
      items:[]
    };
  }

  public async componentDidMount(){
    var results:IDetailsListBasicExampleItem[] = [
      { titolo: 'Delitto sotto il sole', anno:1993, pagine:356,autore:'Agatha' }, 
    ];
    this.setState({items: results});

    this._columns = [
      { key: 'column1', name: 'Titolo', fieldName: 'titolo', minWidth: 100, isResizable: true },
      { key: 'column2', name: 'Autore', fieldName: 'autore', minWidth: 100,  isResizable: true },
      { key: 'column3', name: 'Anno', fieldName: 'anno', minWidth: 100,  isResizable: true },
      { key: 'column4', name: 'Pagine', fieldName: 'pagine', minWidth: 100, isResizable: true },
    ];


    const user = await GraphHelper.getUser();
    this.setState({ user: user });

  }


  public render(): React.ReactElement<IHelloReactProps> {
    return (
      <div> 
         <img src={this.props.description}  />    
              <DetailsList items={this.state.items}  columns={this._columns}/>     
               
      { this.state.user != undefined ? <Persona
       text={this.state.user.displayName}
       secondaryText={this.state.user.mail}
       tertiaryText={this.state.user.givenName}

         size={PersonaSize.size72}
         presence={PersonaPresence.online}
      /> : <p> Loading.... </p>}
      
   
      </div>
    );

  }


}
