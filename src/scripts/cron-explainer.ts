export {};

type FieldParseResult =
  | { kind: 'any' }
  | { kind: 'step'; step: number }
  | { kind: 'range'; start: number; end: number }
  | { kind: 'list'; values: number[] }
  | { kind: 'value'; value: number }
  | { kind: 'invalid' };

const expressionInput = document.querySelector<HTMLInputElement>('#expression');
const result = document.querySelector<HTMLElement>('#result');
const validation = document.querySelector<HTMLElement>('#validation');
const quickActions = document.querySelectorAll<HTMLButtonElement>('[data-expression]');

const englishInput = document.querySelector<HTMLInputElement>('#english');
const cronOutput = document.querySelector<HTMLElement>('#cron-output');
const englishValidation = document.querySelector<HTMLElement>('#english-validation');

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_INDEX: Record<string, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6
};
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const pad = (value: number) => String(value).padStart(2, '0');

const parseField = (field: string, { min, max }: { min: number; max: number }): FieldParseResult => {
  if (field === '*') return { kind: 'any' };
  if (/^\*\/(\d+)$/.test(field)) return { kind: 'step', step: Number(field.split('/')[1]) };
  if (/^(\d+)-(\d+)$/.test(field)) {
    const [start, end] = field.split('-').map(Number);
    if (start < min || end > max || start > end) return { kind: 'invalid' };
    return { kind: 'range', start, end };
  }
  if (/^\d+(,\d+)+$/.test(field)) {
    const values = field.split(',').map(Number);
    if (values.some((item) => item < min || item > max)) return { kind: 'invalid' };
    return { kind: 'list', values };
  }
  if (/^\d+$/.test(field)) {
    const value = Number(field);
    if (value < min || value > max) return { kind: 'invalid' };
    return { kind: 'value', value };
  }
  return { kind: 'invalid' };
};

const describeMinute = (parsed: FieldParseResult): string | null => {
  if (parsed.kind === 'any') return 'every minute';
  if (parsed.kind === 'step') return `every ${parsed.step} minutes`;
  if (parsed.kind === 'value') return `at minute ${pad(parsed.value)}`;
  if (parsed.kind === 'range') return `every minute from ${pad(parsed.start)} through ${pad(parsed.end)}`;
  if (parsed.kind === 'list') return `at minutes ${parsed.values.map(pad).join(', ')}`;
  return null;
};

const describeHour = (parsed: FieldParseResult): string | null => {
  if (parsed.kind === 'any') return '';
  if (parsed.kind === 'step') return `, every ${parsed.step} hours`;
  if (parsed.kind === 'value') return `, at ${pad(parsed.value)}:00`;
  if (parsed.kind === 'range') return `, between ${pad(parsed.start)}:00 and ${pad(parsed.end)}:59`;
  if (parsed.kind === 'list') return `, at hours ${parsed.values.map((v) => `${pad(v)}:00`).join(', ')}`;
  return null;
};

const describeDayOfMonth = (parsed: FieldParseResult): string | null => {
  if (parsed.kind === 'any') return '';
  if (parsed.kind === 'step') return `, every ${parsed.step} days of the month`;
  if (parsed.kind === 'value') return `, on day ${parsed.value} of the month`;
  if (parsed.kind === 'range') return `, on days ${parsed.start}-${parsed.end} of the month`;
  if (parsed.kind === 'list') return `, on days ${parsed.values.join(', ')} of the month`;
  return null;
};

const describeMonth = (parsed: FieldParseResult): string | null => {
  if (parsed.kind === 'any') return '';
  if (parsed.kind === 'value') return `, in ${MONTHS[parsed.value - 1]}`;
  if (parsed.kind === 'range') return `, from ${MONTHS[parsed.start - 1]} to ${MONTHS[parsed.end - 1]}`;
  if (parsed.kind === 'list') return `, in ${parsed.values.map((v) => MONTHS[v - 1]).join(', ')}`;
  if (parsed.kind === 'step') return `, every ${parsed.step} months`;
  return null;
};

const normalizeDow = (day: number) => (day === 7 ? 0 : day);

const describeDayOfWeek = (parsed: FieldParseResult): string | null => {
  if (parsed.kind === 'any') return '';
  if (parsed.kind === 'value') return `, on ${DAYS[normalizeDow(parsed.value)]}`;
  if (parsed.kind === 'range') return `, ${DAYS[normalizeDow(parsed.start)]} through ${DAYS[normalizeDow(parsed.end)]}`;
  if (parsed.kind === 'list') return `, on ${parsed.values.map((d) => DAYS[normalizeDow(d)]).join(', ')}`;
  if (parsed.kind === 'step') return `, every ${parsed.step} days of the week`;
  return null;
};

const describeExpression = (expression: string): { message: string; valid: boolean } => {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) {
    return { message: 'Cron expression must include exactly 5 fields.', valid: false };
  }

  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;
  const minuteP = parseField(minute, { min: 0, max: 59 });
  const hourP = parseField(hour, { min: 0, max: 23 });
  const domP = parseField(dayOfMonth, { min: 1, max: 31 });
  const monthP = parseField(month, { min: 1, max: 12 });
  const dowP = parseField(dayOfWeek, { min: 0, max: 7 });

  if ([minuteP, hourP, domP, monthP, dowP].some((item) => item.kind === 'invalid')) {
    return {
      message: 'Unsupported field detected. Use numbers, *, ranges (1-5), lists (1,3), or steps (*/5).',
      valid: false
    };
  }

  const description = `${describeMinute(minuteP)}${describeHour(hourP)}${describeDayOfMonth(domP)}${describeMonth(monthP)}${describeDayOfWeek(dowP)}.`;
  return { message: description.charAt(0).toUpperCase() + description.slice(1), valid: true };
};

const update = (value: string) => {
  const expression = value.trim() || '* * * * *';
  const details = describeExpression(expression);
  if (result) result.textContent = details.message;
  if (validation) validation.textContent = details.valid ? `Expression: ${expression}` : `Invalid expression: ${expression}`;
};

const parseEnglishToCron = (text: string): { cron: string; valid: boolean; message: string } => {
  const value = text.trim().toLowerCase();

  if (value === 'every minute') return { cron: '* * * * *', valid: true, message: 'Converted from plain English.' };

  const everyMinutes = value.match(/^every (\d{1,2}) minutes?$/);
  if (everyMinutes) {
    const step = Number(everyMinutes[1]);
    if (step >= 1 && step <= 59) return { cron: `*/${step} * * * *`, valid: true, message: 'Converted from plain English.' };
  }

  if (value === 'every hour') return { cron: '0 * * * *', valid: true, message: 'Converted from plain English.' };

  const daily = value.match(/^every day at (\d{1,2}):(\d{2})$/);
  if (daily) {
    const hour = Number(daily[1]);
    const minute = Number(daily[2]);
    if (hour <= 23 && minute <= 59) return { cron: `${minute} ${hour} * * *`, valid: true, message: 'Converted from plain English.' };
  }

  const weekday = value.match(/^every weekday at (\d{1,2}):(\d{2})$/);
  if (weekday) {
    const hour = Number(weekday[1]);
    const minute = Number(weekday[2]);
    if (hour <= 23 && minute <= 59) return { cron: `${minute} ${hour} * * 1-5`, valid: true, message: 'Converted from plain English.' };
  }

  const daySpecific = value.match(/^every (sunday|monday|tuesday|wednesday|thursday|friday|saturday) at (\d{1,2}):(\d{2})$/);
  if (daySpecific) {
    const day = DAY_INDEX[daySpecific[1]];
    const hour = Number(daySpecific[2]);
    const minute = Number(daySpecific[3]);
    if (hour <= 23 && minute <= 59) return { cron: `${minute} ${hour} * * ${day}`, valid: true, message: 'Converted from plain English.' };
  }

  return {
    cron: 'Unable to convert',
    valid: false,
    message: 'Try formats like: every 10 minutes, every day at 02:30, every weekday at 09:00.'
  };
};

const updateEnglish = (value: string) => {
  const converted = parseEnglishToCron(value);
  if (cronOutput) cronOutput.textContent = converted.cron;
  if (englishValidation) englishValidation.textContent = converted.message;
};

expressionInput?.addEventListener('input', (event) => {
  update((event.currentTarget as HTMLInputElement).value);
});

englishInput?.addEventListener('input', (event) => {
  updateEnglish((event.currentTarget as HTMLInputElement).value);
});

quickActions.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.expression ?? '* * * * *';
    if (expressionInput) expressionInput.value = value;
    update(value);
  });
});

update(expressionInput?.value ?? '* * * * *');
updateEnglish(englishInput?.value ?? 'every weekday at 09:00');
