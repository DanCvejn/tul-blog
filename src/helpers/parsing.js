export const parseName = (person) => {
  return person.firstName + ' ' + person.lastName;
}

export const parseDate = (date, format) => {
  let returnDate = format;
  const mm = date.getMinutes().toString();
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