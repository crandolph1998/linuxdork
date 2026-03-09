export {};

const serviceInput = document.querySelector<HTMLInputElement>('#service');
const priorityInput = document.querySelector<HTMLSelectElement>('#priority');
const sinceInput = document.querySelector<HTMLInputElement>('#since');
const untilInput = document.querySelector<HTMLInputElement>('#until');
const followInput = document.querySelector<HTMLInputElement>('#follow');
const output = document.querySelector<HTMLElement>('#journalctl-output');

const render = () => {
  const parts = ['journalctl'];
  const service = serviceInput?.value.trim();
  if (service) parts.push(`-u ${service}`);
  const priority = priorityInput?.value;
  if (priority) parts.push(`-p ${priority}`);
  const since = sinceInput?.value.trim() || '-2h';
  const until = untilInput?.value.trim() || 'now';
  parts.push(`--since "${since}"`);
  parts.push(`--until "${until}"`);
  if (followInput?.checked) parts.push('-f');
  if (output) output.textContent = parts.join(' ');
};

[serviceInput, priorityInput, sinceInput, untilInput, followInput].forEach((el) => el?.addEventListener('input', render));
render();
