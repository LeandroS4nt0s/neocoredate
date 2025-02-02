export class DateParser {
    static parse(date: string): Date {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error(`Invalid date: ${date}`);
      }
      return parsedDate;
    }
  }
  