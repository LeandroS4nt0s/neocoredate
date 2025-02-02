import { DateParser } from '../utils/DateParser';
import { DateFormatter } from './DateFormatter';

export class DateManipulator {

  static addDays(date: string | Date, days: number): Date {
    const parsedDate = DateManipulator.parse(date);
    parsedDate.setDate(parsedDate.getDate() + days);
    return parsedDate;
  }

  static subtractDays(date: string | Date, days: number): Date {
    const parsedDate = DateManipulator.parse(date);
    parsedDate.setDate(parsedDate.getDate() - days);
    return parsedDate;
  }

  static addMonths(date: string | Date, months: number): Date {
    const parsedDate = DateManipulator.parse(date);
    parsedDate.setMonth(parsedDate.getMonth() + months);
    return parsedDate;
  }

  static subtractMonths(date: string | Date, months: number): Date {
    const parsedDate = DateManipulator.parse(date);
    parsedDate.setMonth(parsedDate.getMonth() - months);
    return parsedDate;
  }

  static parse(date: string | Date): Date {
    if (typeof date === 'string') {
      return DateParser.parse(date);
    }
    return new Date(date);
  }

  static formatTo(date: Date, format: string): string {
    return DateFormatter.format(date, format);
  }
}
