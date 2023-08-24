import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

function getAirDatePicker() {
	new AirDatepicker("#air-datepicker", {
		minDate: new Date(),
		range: true,
		multipleDatesSeparator: " - ",
	});
}

export default getAirDatePicker;
