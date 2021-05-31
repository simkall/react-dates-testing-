import "./App.css";
import { DayPickerSingleDateController } from "react-dates";
import { useState } from "react";
import moment, {Moment} from 'moment'

import 'react-dates/initialize';

const rangeStart = moment().subtract(1,'month');
const rangeEnd = moment().add(5,'months');

const isOutsideOfRange = (date: Moment) => {
  const isBetween = date.isBetween(rangeStart, rangeEnd, 'day');
  const isSame = date.isSame(rangeStart, 'day') || date.isSame(rangeEnd, 'day');

  return !(isBetween || isSame);
}; 


function App() {
  const [value, setValue] = useState<Moment>(moment())
  const [open, setOpen] = useState(false);

  return (
    <div className="App"> 
      <button onClick={() => setOpen(!open)}>toggle calendar</button>
      
      {
        open && (
          <DayPickerSingleDateController
            date={value}
            initialVisibleMonth={() => value}
            onDateChange={(date) => date && setValue(date)}
            onFocusChange={(_focused: any) => null}
            focused={false}
            numberOfMonths={5}
            orientation="vertical"
            noBorder
            firstDayOfWeek={1}
            enableOutsideDays={false}
            isDayBlocked={isOutsideOfRange}
            hideKeyboardShortcutsPanel={true}
            navPrev={<></>}
            navNext={<></>}
          />
        )}
    </div>
  );
}

export default App;
