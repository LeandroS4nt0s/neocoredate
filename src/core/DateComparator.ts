export class DateComparator {
    static isEarlier(date1: string | Date, date2: string | Date): boolean {
      const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
      const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
      return d1 < d2;
    }
  
    static isLater(date1: string | Date, date2: string | Date): boolean {
      const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
      const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
      return d1 > d2;
    }
  
    static isSameDay(date1: string | Date, date2: string | Date): boolean {
      const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
      const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
      return d1.toDateString() === d2.toDateString();
    }
  }
  