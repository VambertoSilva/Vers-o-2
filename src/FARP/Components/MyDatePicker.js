import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Styles from "./MyDatePicker.module.css";

let value;

function MyDatePicker({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} className={Styles.picker} />
    </LocalizationProvider>
  );
}

export default MyDatePicker;
