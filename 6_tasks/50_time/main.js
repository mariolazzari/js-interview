// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

function convertTo24HrsFormat(timeText) {
  // Extract parts: time (HH:MM) and meridian (AM/PM)
  let [time, modifier] = timeText.split(/(AM|PM)/i).filter(Boolean);
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours, 10);
  minutes = minutes.padStart(2, "0");

  if (modifier.toUpperCase() === "AM") {
    if (hours === 12) hours = 0; // 12AM → 00
  } else {
    if (hours !== 12) hours += 12; // PM → add 12 unless it's 12PM
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
