export class DateValidator {
  static isValid(date: string, format: string): boolean {
    const regex = this.getDateRegex(format);
    const match = date.match(regex);
    if (!match) return false;

    const [day, month, year] = this.extractDateComponents(match, format);
    const daysInMonth = this.getDaysInMonth(month, year);
    return day >= 1 && day <= daysInMonth;
  }

  private static extractDateComponents(match: RegExpMatchArray, format: string): number[] {
    let day = 0, month = 0, year = 0;


    const formatParts = format.split(/[^a-zA-Z]+/);

    formatParts.forEach((part, index) => {
      if (part === 'dd') day = parseInt(match[index + 1], 10);
      else if (part === 'mm') month = parseInt(match[index + 1], 10);
      else if (part === 'yyyy') year = parseInt(match[index + 1], 10);
    });

    return [day, month, year];
  }

  private static getDaysInMonth(month: number, year: number): number {
    const daysInMonthMap = {
      1: 31,
      2: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    return daysInMonthMap[month as keyof typeof daysInMonthMap] || 0;
  }

  private static getDateRegex(format: string): RegExp {
    const regexMap = {
      'dd': '(\\d{2})',
      'mm': '(\\d{2})',
      'yyyy': '(\\d{4})'
    };

 
    const regexString = format
      .replace('dd', regexMap['dd'])
      .replace('mm', regexMap['mm'])
      .replace('yyyy', regexMap['yyyy']);

    return new RegExp(`^${regexString}$`);
  }
}
