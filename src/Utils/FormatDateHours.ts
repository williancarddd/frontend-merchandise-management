export function FormatDateHours(
  date: string | undefined
): [string, string] | string {
  //2021-10-18 T 19:40:11.000Z
  //2021-10-18  19:40:11
  if (date) {
    const [date_formated, hours_not_formated] = date.split('T')
    const [hours_formated] = hours_not_formated.split('.') //[19:40:11, 000Z]
    return [date_formated, hours_formated]
  }
  return 'error'
}
