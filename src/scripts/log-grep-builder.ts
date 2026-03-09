export {};

const patternInput = document.querySelector<HTMLInputElement>('#pattern');
const logfileInput = document.querySelector<HTMLInputElement>('#logfile');
const contextInput = document.querySelector<HTMLInputElement>('#context');
const ignoreCaseInput = document.querySelector<HTMLInputElement>('#ignore-case');
const regexInput = document.querySelector<HTMLInputElement>('#regex');
const lineNumberInput = document.querySelector<HTMLInputElement>('#line-number');
const output = document.querySelector<HTMLElement>('#grep-output');

const render = () => {
  const pattern = patternInput?.value.trim() || 'error';
  const logfile = logfileInput?.value.trim() || '/var/log/syslog';
  const context = Number(contextInput?.value ?? '0') || 0;
  const flags = ['grep'];

  if (regexInput?.checked) flags.push('-E');
  if (ignoreCaseInput?.checked) flags.push('-i');
  if (lineNumberInput?.checked) flags.push('-n');
  if (context > 0) flags.push(`-C ${context}`);

  const cmd = `${flags.join(' ')} "${pattern}" ${logfile}`;
  if (output) output.textContent = cmd;
};

[patternInput, logfileInput, contextInput, ignoreCaseInput, regexInput, lineNumberInput].forEach((el) => el?.addEventListener('input', render));
render();
