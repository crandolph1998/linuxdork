export {};

const sourceInput = document.querySelector<HTMLInputElement>('#source');
const destinationInput = document.querySelector<HTMLInputElement>('#destination');
const excludeInput = document.querySelector<HTMLInputElement>('#exclude');
const archiveInput = document.querySelector<HTMLInputElement>('#archive');
const verboseInput = document.querySelector<HTMLInputElement>('#verbose');
const compressInput = document.querySelector<HTMLInputElement>('#compress');
const deleteInput = document.querySelector<HTMLInputElement>('#delete');
const dryrunInput = document.querySelector<HTMLInputElement>('#dryrun');
const output = document.querySelector<HTMLElement>('#rsync-output');

const render = () => {
  const source = sourceInput?.value.trim() || '/source/';
  const destination = destinationInput?.value.trim() || '/destination/';
  const exclude = excludeInput?.value.trim();
  const flags: string[] = [];

  if (archiveInput?.checked) flags.push('-a');
  if (verboseInput?.checked) flags.push('-v');
  if (compressInput?.checked) flags.push('-z');
  if (deleteInput?.checked) flags.push('--delete');
  if (dryrunInput?.checked) flags.push('--dry-run');
  if (exclude) flags.push(`--exclude='${exclude}'`);

  const command = `rsync ${flags.join(' ')} ${source} ${destination}`.trim().replace(/\s+/g, ' ');
  if (output) output.textContent = command;
};

[sourceInput, destinationInput, excludeInput, archiveInput, verboseInput, compressInput, deleteInput, dryrunInput].forEach((el) => el?.addEventListener('input', render));
render();
