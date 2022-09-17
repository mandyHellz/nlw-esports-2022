export function convertHourStrToMin(hourString: string) {
  const [hours, mins] = hourString.split(":").map(Number);

  const minutesAmount = hours * 60 + mins;

  return minutesAmount;
}
