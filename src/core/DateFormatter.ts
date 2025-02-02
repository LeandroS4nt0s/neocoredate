export class DateFormatter {
  static formatToBrazilian(date: Date): string {
    return DateFormatter.format(date, 'DD/MM/YYYY');
  }

  static formatToISO(date: Date, includeTime: boolean = false): string {
    const isoString = date.toISOString();
    if (includeTime) {
      return isoString;
    } else {
      return isoString.split('T')[0];
    }
  }

  static format(date: Date, format: string): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return format.replace('DD', day).replace('MM', month).replace('YYYY', year);
  }
}
