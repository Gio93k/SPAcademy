import * as React from 'react';
import styles from './Events.module.scss';
import { IEventsProps } from './IEventsProps';
import { IEventsState } from './IEventsState';
import { IEventItem } from "../../../data";
import { sp } from "@pnp/sp/";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { ListView, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import { SPHelper } from './Helper/Helper';

/**
 * Events component
 */
export class Events extends React.Component<IEventsProps, IEventsState> {
  constructor(props: IEventsProps) {
    super(props);

    // set default state
    this.state = {
      loading: false,
      events: [],
      error: undefined
    };
  }

  /**
   * Event handler for selecting an event in the list
   */
  private _getSelection = (event: any[]): void => {
    // since the list allows selecting only one item, pick the first selected
    // event and pass to the event handler specified through component
    // properties
    this.props.onEventSelected(event[0]);
  }

  public async componentDidMount() {
    // indicate that the component is loading data
    let nomeLista = "DettagliPG";
    const _item = await SPHelper.getItemFromList(nomeLista);

    this.setState({
      loading: false,
      events: _item.map(i => {
        return {
          name: i.Title,
          Tipo: i.Tipo2,
          Avengers: i.Avengers,
        };
      })
    });
    //   events: [{
    //     name: _item[0].Title,
    //     Tipo: _item[0].Tipo2,
    //     Avengers: _item[0].Avengers,
    //   },
    //   {
    //     name: _item[1].Title,
    //     Tipo: _item[1].Tipo2,
    //     Avengers: _item[1].Avengers,
    //   },
    //   {
    //     name: _item[2].Title,
    //     Tipo: _item[2].Tipo2,
    //     Avengers: _item[2].Avengers,
    //   }],
    //   error: undefined
    // });

  }

  public render(): React.ReactElement<IEventsProps> {
    const { loading, error, events } = this.state;
    const { displayMode, title, updateProperty } = this.props;

    return (
      <div className={styles.events} >
        <WebPartTitle displayMode={displayMode}
          title={title}
          updateProperty={updateProperty} />
        {loading &&
          <Spinner size={SpinnerSize.large} label='Loading events...' />}
        {
          !loading &&
          error &&
          <div className={styles.error}>The following error occurred while loading events: <span className={styles.msg}>{error}</span></div>
        }
        {
          !loading &&
          !error &&
          events.length === 0 &&
          <div className={styles.info}>No events found</div>
        }
        {
          !loading &&
          events.length > 0 &&
          <ListView
            items={events}
            viewFields={[
              {
                name: 'name',
                displayName: 'Elenco personaggi',
                sorting: true
              },
              // {
              //   name: 'city',
              //   displayName: 'Location',
              //   sorting: true,
              //   minWidth: 100
              // }
            ]}
            compact={true}
            selectionMode={SelectionMode.single}
            selection={this._getSelection} />
        }
      </div >
    );
  }
}