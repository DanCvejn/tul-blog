export const parseName = (person) => {
  return person.firstName + ' ' + person.lastName;
}

const zeroCheck = (time) => {
  if (parseInt(time) < 10) return "0" + time;
  return time
}

export const parseDate = (date, format) => {
  let returnDate = format;
  const mm = zeroCheck(date.getMinutes().toString());
  returnDate = returnDate.replace("mm", mm);
  const HH = date.getHours().toString();
  returnDate = returnDate.replace("HH", HH);
  const MM = (date.getMonth() + 1).toString();
  returnDate = returnDate.replace("M", MM).toString();
  const YYYY = date.getFullYear().toString();
  returnDate = returnDate.replace("YYYY", YYYY);
  const DD = date.getDate().toString();
  returnDate = returnDate.replace("D", DD);
  return returnDate;
}