// src/utils/DateFormatterUtil.ts
export class DateFormatterUtil {
    static toBrazilianFormat(date: Date): string {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  
    static toISOFormat(date: Date): string {
      return date.toISOString();
    }
  }
  