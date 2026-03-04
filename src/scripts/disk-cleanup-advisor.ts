export {};

const distroInput = document.querySelector<HTMLSelectElement>('#distro');
const logsInput = document.querySelector<HTMLInputElement>('#logs');
const tmpInput = document.querySelector<HTMLInputElement>('#tmp');
const dryInput = document.querySelector<HTMLInputElement>('#dry');
const output = document.querySelector<HTMLElement>('#cleanup-output');

const render = () => {
  const lines: string[] = [];
  const distro = distroInput?.value ?? 'apt';
  const dry = Boolean(dryInput?.checked);

  if (distro === 'apt') {
    lines.push('sudo apt update');
    if (dry) lines.push('apt list --upgradable');
    lines.push('sudo apt autoremove -y');
    lines.push('sudo apt clean');
  } else {
    lines.push('sudo dnf check-update');
    if (dry) lines.push('sudo dnf repoquery --unsatisfied');
    lines.push('sudo dnf autoremove -y');
    lines.push('sudo dnf clean all');
  }

  if (logsInput?.checked) {
    lines.push(dry ? 'journalctl --disk-usage' : 'sudo journalctl --vacuum-time=14d');
  }

  if (tmpInput?.checked) {
    lines.push('find /tmp -type f -mtime +7');
    if (!dry) lines.push('sudo find /tmp -type f -mtime +7 -delete');
  }

  lines.push('df -h');
  if (output) output.textContent = lines.join('\n');
};

[distroInput, logsInput, tmpInput, dryInput].forEach((el) => el?.addEventListener('input', render));
render();
