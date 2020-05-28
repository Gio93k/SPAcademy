import * as React from 'react';
import styles from './FormControlli.module.scss';
import { IFormControlliProps } from './IFormControlliProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { addMonths, addYears, addDays } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Checkbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  disabled: boolean;
  checked?: boolean;

  minDate: Date;
  maxDate: Date;
}


const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

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
  isRequiredErrorMessage: 'Field is required.',
  invalidInputErrorMessage: 'Invalid date format.',
};
const today: Date = new Date(Date.now());
const minDate: Date = today;
const maxDate: Date = addDays(today, 90);
var fixDate = (minDate, maxDate) => { minDate = minDate; maxDate = maxDate }

// const description = `When date boundaries are set (via minDate and maxDate props) the DatePicker will not allow
//  out-of-bounds dates to be picked or entered. In this example, the allowed dates are
//  ${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`;
const firstDayOfWeek = DayOfWeek.Sunday;
export default class FormControlli extends React.Component<IFormControlliProps, IButtonExampleProps> {

  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      minDate: today,
      maxDate: today
    }
  }

  _onChange = (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    this.setState({ disabled: !isChecked })
    //console.log(`The option has been changed to ${isChecked}.`);
  }
  // _onChangeBis = () => {
  //   this.setState({ minDate: minDate })
  //   this.setState({ maxDate: maxDate })
  //   //console.log(`The option has been changed to ${isChecked}.`);
  // }

  _click(): void {
    alert("ha cliccato")
  }


  public render(): React.ReactElement<IFormControlliProps> {
    return (
      <div>
        {/* <p>{description}</p> */}
        <DatePicker
          className={controlClass.control}
          isRequired={false}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Select a date..."
          ariaLabel="Select a date"
          minDate={minDate}
          allowTextInput={false}


        />
        <DatePicker
          className={controlClass.control}
          isRequired={false}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Select a date..."
          ariaLabel="Select a date"
          maxDate={maxDate}
          allowTextInput={true}


        />

        <Checkbox className={controlClass.control} label=
          "I have read the information on the processing of personal data" onChange={this._onChange} />

        <PrimaryButton text="Confirm" onClick={this._click} allowDisabledFocus disabled={this.state.disabled} />
        {/* <PrimaryButton text="Confirm" onClick={_click} /> */}
      </div>
    );

  }
}
