import { DateValidator, DateFormatter, DateManipulator } from '../src';

describe('DateValidator Tests', () => {
  it('should validate a correct date in yyyy-mm-dd format', () => {
    const validDate = '2025-02-01';
    const invalidDate = '2025-02-31';

    expect(DateValidator.isValid(validDate, 'yyyy-mm-dd')).toBe(true);
    expect(DateValidator.isValid(invalidDate, 'yyyy-mm-dd')).toBe(false);
  });

  it('should validate a correct date in dd-mm-yyyy format', () => {
    const validDate = '01-02-2025';
    const invalidDate = '31-02-2025';

    expect(DateValidator.isValid(validDate, 'dd-mm-yyyy')).toBe(true);
    expect(DateValidator.isValid(invalidDate, 'dd-mm-yyyy')).toBe(false);
  });

  it('should validate leap year correctly (29-02-2024)', () => {
    const validLeapYearDate = '29-02-2024';
    const invalidLeapYearDate = '29-02-2023';
    const invalidLeapYearDate2 = '29-02-2025';

    expect(DateValidator.isValid(validLeapYearDate, 'dd-mm-yyyy')).toBe(true);
    expect(DateValidator.isValid(invalidLeapYearDate, 'dd-mm-yyyy')).toBe(false);
    expect(DateValidator.isValid(invalidLeapYearDate2, 'dd-mm-yyyy')).toBe(false);
  });

  it('should return false for invalid format', () => {
    const invalidFormatDate = '2025/02/01';

    expect(DateValidator.isValid(invalidFormatDate, 'yyyy-mm-dd')).toBe(false);
  });
});

describe('DateFormatter Tests', () => {
  const date1 = new Date(Date.UTC(2025, 1, 1));
  const date2 = new Date(Date.UTC(2025, 1, 2));

  it('should format date to Brazilian format (DD/MM/YYYY)', () => {
    const result = DateFormatter.formatToBrazilian(date2);
    expect(result).toBe('01/02/2025');
  });

  it('should format date to ISO format without time (yyyy-mm-dd)', () => {
    const result = DateFormatter.formatToISO(date1);
    expect(result).toBe('2025-02-01');
  });

  it('should format date to ISO format with time (yyyy-mm-ddTHH:MM:SS.sssZ)', () => {
    const result = DateFormatter.formatToISO(date1, true);
    expect(result).toBe('2025-02-01T00:00:00.000Z');
  });

  it('should format date using custom format (DD/MM/YYYY)', () => {
    const result = DateFormatter.format(date2, 'DD/MM/YYYY');
    expect(result).toBe('01/02/2025');
  });
});

describe('DateManipulator Tests', () => {
  const date = new Date(Date.UTC(2025, 1, 1));
  const date2 = new Date(Date.UTC(2025, 1, 2));

  it('should add days to a date correctly', () => {
    const result = DateManipulator.addDays(date, 5);
    expect(DateFormatter.formatToISO(result)).toBe('2025-02-06');
  });

  it('should subtract days from a date correctly', () => {
    const result = DateManipulator.subtractDays(date, 5);
    expect(DateFormatter.formatToISO(result)).toBe('2025-01-27');
  });

  it('should add months to a date correctly', () => {
    const result = DateManipulator.addMonths(date, 2);
    expect(DateFormatter.formatToISO(result)).toBe('2025-04-01');
  });

  it('should subtract months from a date correctly', () => {
    const result = DateManipulator.subtractMonths(date, 2);
    expect(DateFormatter.formatToISO(result)).toBe('2024-12-02');
  });

  it('should manipulate and format date directly using custom format', () => {
    const result = DateManipulator.formatTo(date2, 'DD/MM/YYYY');
    expect(result).toBe('01/02/2025');
  });
});

describe('Edge Cases Tests', () => {
  it('should return false for invalid leap year (29-02-2023)', () => {
    const invalidLeapYearDate = '29-02-2023';
    expect(DateValidator.isValid(invalidLeapYearDate, 'dd-mm-yyyy')).toBe(false);
  });

  it('should correctly identify end of month for February (28-02-2025)', () => {
    const validDate = '28-02-2025';
    const invalidDate = '29-02-2025'; // Invalid for non-leap year

    expect(DateValidator.isValid(validDate, 'dd-mm-yyyy')).toBe(true);
    expect(DateValidator.isValid(invalidDate, 'dd-mm-yyyy')).toBe(false);
  });

  it('should correctly identify the last day of the month (31-12-2025)', () => {
    const validDate = '31-12-2025';
    const invalidDate = '32-12-2025'; // Invalid day

    expect(DateValidator.isValid(validDate, 'dd-mm-yyyy')).toBe(true);
    expect(DateValidator.isValid(invalidDate, 'dd-mm-yyyy')).toBe(false);
  });

  it('should validate leap year with the correct day count (29-02-2024)', () => {
    const leapYearValidDate = '29-02-2024'; // Valid leap year date
    const nonLeapYearInvalidDate = '29-02-2023'; // Invalid for non-leap year

    expect(DateValidator.isValid(leapYearValidDate, 'dd-mm-yyyy')).toBe(true);
    expect(DateValidator.isValid(nonLeapYearInvalidDate, 'dd-mm-yyyy')).toBe(false);
  });
});

describe('Invalid Formats Tests', () => {
  it('should return false for an invalid date format with dashes', () => {
    const invalidDate = '2025-31-12';
    expect(DateValidator.isValid(invalidDate, 'yyyy-mm-dd')).toBe(false);
  });


  it('should handle invalid regex patterns correctly', () => {
    const invalidDate = '31-12-2025';
    expect(DateValidator.isValid(invalidDate, 'yyyy-dd-mm')).toBe(false);
  });
});
