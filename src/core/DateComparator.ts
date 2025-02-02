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

  static timeUntil(targetDate: string | Date): string {
    const now = new Date();
    const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;

    if (target <= now) {
      return "The target date has already passed.";
    }

    const diffMs = target.getTime() - now.getTime();

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  }
}
