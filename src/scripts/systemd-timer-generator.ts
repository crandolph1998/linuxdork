export {};

const serviceNameInput = document.querySelector<HTMLInputElement>('#svc-name');
const commandInput = document.querySelector<HTMLInputElement>('#svc-command');
const scheduleInput = document.querySelector<HTMLSelectElement>('#schedule');
const timeInput = document.querySelector<HTMLInputElement>('#time');
const serviceOutput = document.querySelector<HTMLElement>('#service-output');
const timerOutput = document.querySelector<HTMLElement>('#timer-output');
const enableOutput = document.querySelector<HTMLElement>('#enable-output');

const scheduleMap: Record<string, string | ((time: string) => string)> = {
  hourly: '*-*-* *:00:00',
  daily: (time) => `*-*-* ${time}:00`,
  weekly: (time) => `Mon *-*-* ${time}:00`,
  weekdays: (time) => `Mon..Fri *-*-* ${time}:00`
};

const build = () => {
  const rawName = serviceNameInput?.value.trim() || 'my-job';
  const name = rawName.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
  const command = commandInput?.value.trim() || '/usr/local/bin/job.sh';
  const schedule = scheduleInput?.value ?? 'daily';
  const time = /^\d{2}:\d{2}$/.test(timeInput?.value ?? '') ? (timeInput?.value ?? '02:30') : '02:30';
  const onCalendar = typeof scheduleMap[schedule] === 'function' ? scheduleMap[schedule](time) : scheduleMap[schedule];

  const serviceText = `[Unit]\nDescription=${name} job\n\n[Service]\nType=oneshot\nExecStart=${command}\n`;
  const timerText = `[Unit]\nDescription=Run ${name} on schedule\n\n[Timer]\nOnCalendar=${onCalendar}\nPersistent=true\n\n[Install]\nWantedBy=timers.target\n`;

  if (serviceOutput) serviceOutput.textContent = serviceText;
  if (timerOutput) timerOutput.textContent = timerText;
  if (enableOutput) enableOutput.textContent = `sudo systemctl enable --now ${name}.timer`;
};

[serviceNameInput, commandInput, scheduleInput, timeInput].forEach((el) => el?.addEventListener('input', build));

build();
