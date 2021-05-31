**react-dates version**
react-dates@21.8.0

**Describe the bug**
The CalendarDay components initially have the `CalendarDay__blocked_out_of_range` and `CalendarDay__selected` classnames set. After changing the selected value to a value a couple of months in the future and toggling the calendar component the classnames disappear.

**Source code (including props configuration)**
https://github.com/simkall/react-dates-testing-

Steps to reproduce the behaviour:

- Click "toggle calendar"
- The calendar opens with the current date and days outside of the range highlighted.
- Selected a date a couple of months in the future.
- Click "toggle calendar"
- Click "toggle calendar" again
- Unavailable dates are no longer highlighted, and clicking dates no longer updates the selected value.

The highlighting reappears if you select the current date and toggle the calendar.
