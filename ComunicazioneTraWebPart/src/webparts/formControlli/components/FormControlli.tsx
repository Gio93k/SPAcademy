import * as React from 'react';
import styles from './FormControlli.module.scss';
import { IFormControlliProps } from './IFormControlliProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { addMonths, addYears, addDays } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Checkbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { DefaultButton, PrimaryButton, IStackTokens, Calendar, htmlElementProperties } from 'office-ui-fabric-react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Helper } from './Helper/Helper';

export interface IState {
  checked: boolean
  buttonEnable: boolean
}

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

export default class FormControlli extends React.Component<IFormControlliProps, IState> {
  private nome: string;
  private cognome: string;
  private data: Date;
  private email: string;

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      buttonEnable: false
    };

    this.handleChangeNome = this.handleChangeNome.bind(this);
  }

  handleChangeNome = (event, value) => {
    this.nome = value;
    this.validate();
  }

  handleChangeCognome = (event, value) => {
    this.cognome = value
    this.validate();
  }

  handleChangeEmail = (event, value) => {
    this.email = value
    this.validate();
  }

  handleChangeDate = (data: Date) => {
    this.data = data
    this.validate();
  }

  validate = () => {
    if (this.nome && this.cognome && this.data && this.email) {
      this.setState({ buttonEnable: true })
    }
    else {
      this.setState({ buttonEnable: false })
    }
  }
  // form registrazione
  _saveToList = async () => {
    //chiamata a lista
    var nomeLista = "ListaProva";
    const _item = await Helper.writeListItem(this.nome, this.cognome, this.data.toISOString(), this.email, nomeLista);
  }

  public render(): React.ReactElement<IFormControlliProps> {
    return (
      <div>
        <h1> Registrati</h1>

        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
          <Stack {...columnProps}>
            <TextField label="Nome" onChange={this.handleChangeNome} />
            <TextField label="Cognome" onChange={this.handleChangeCognome} />

            <DatePicker
              className={controlClass.control}
              strings={DayPickerStrings}
              placeholder="Select a date..."
              ariaLabel="Select a date"
              onSelectDate={this.handleChangeDate}
            />

            <TextField label="Email" required onChange={this.handleChangeEmail} />
            <TextField label="Password" required type='password' />
            <PrimaryButton text="Primary" onClick={this._saveToList} allowDisabledFocus disabled={!this.state.buttonEnable} />
          </Stack>

        </Stack>
      </div>
    );

  }
}
