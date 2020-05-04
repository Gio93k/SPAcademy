import * as React from 'react';
import styles from './MarvelWebPart.module.scss';
import { IMarvelWebPartProps } from './IMarvelWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';


export default class MarvelWebPart extends React.Component<IMarvelWebPartProps, {}> {

  constructor(props) {
    super(props);
  }



  public render(): React.ReactElement<IMarvelWebPartProps> {

    const iron_img: any = require('../assets/portrait/iron_man.png'); // importa l'immagine da visualizzare
    return (
      <div className={styles.marvelWebPart}>

        <img src={iron_img} alt="iron_man" width="150" height="150" />

      </div>

    );
  }
}
