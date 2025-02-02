# NeoCoreDate

NeoCoreDate is a TypeScript library designed to help developers with date validation, formatting, and manipulation. It supports various date formats and provides useful functions to work with dates in a simple and efficient manner.

## Features

- **Date Validator**: Validate dates based on a given format (e.g., `yyyy-mm-dd`, `dd-mm-yyyy`).
- **Date Formatter**: Format dates into different formats (e.g., `yyyy-mm-dd`, `DD/MM/YYYY`).
- **Date Manipulator**: Perform operations like adding or subtracting days, months, etc., and format the results.

## Installation

You can install the package via npm:

```bash
npm install neocoredate
```

## Usage

### 1. Date Validation

The `DateValidator` class allows you to check whether a date is valid based on a specific format.

#### Example:

```typescript
import { DateValidator } from 'neocoredate';

const validDate = '2025-02-01';
const invalidDate = '2025-02-31';

console.log(`Is the date ${validDate} valid?`, DateValidator.isValid(validDate, 'yyyy-mm-dd')); // true
console.log(`Is the date ${invalidDate} valid?`, DateValidator.isValid(invalidDate, 'yyyy-mm-dd')); // false
```

### 2. Date Formatting

The `DateFormatter` class allows you to format dates into various formats.

#### Example:

```typescript
import { DateFormatter } from 'neocoredate';

const date = new Date('2025-02-01T12:34:56');

console.log('Brazilian format:', DateFormatter.formatToBrazilian(date)); // Ex: 01/02/2025
console.log('ISO format without time:', DateFormatter.formatToISO(date)); // Ex: 2025-02-01
console.log('Custom format:', DateFormatter.format(date, 'DD/MM/YYYY')); // Ex: 01/02/2025
```

### 3. Date Manipulation

The `DateManipulator` class allows you to add or subtract days and months from a given date.

#### Example:

```typescript
import { DateManipulator, DateFormatter } from 'neocoredate';

const date = new Date('2025-02-01T12:34:56');

const newDate = DateManipulator.addDays(date, 5);
console.log('Date after adding 5 days:', DateFormatter.formatToISO(newDate)); // Ex: 2025-02-06

const subtractedDate = DateManipulator.subtractDays(date, 5);
console.log('Date after subtracting 5 days:', DateFormatter.formatToISO(subtractedDate)); // Ex: 2025-01-27

const addedMonthsDate = DateManipulator.addMonths(date, 2);
console.log('Date after adding 2 months:', DateFormatter.formatToISO(addedMonthsDate)); // Ex: 2025-04-01

const subtractedMonthsDate = DateManipulator.subtractMonths(date, 2);
console.log('Date after subtracting 2 months:', DateFormatter.formatToISO(subtractedMonthsDate)); // Ex: 2025-12-01
```

## License

MIT License. See [LICENSE](./LICENSE) for more information.

