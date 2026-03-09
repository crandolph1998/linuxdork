export {};

const checks = document.querySelectorAll<HTMLInputElement>('#perm-grid input[type="checkbox"]');
const octalOutput = document.querySelector<HTMLElement>('#chmod-octal');
const symbolicOutput = document.querySelector<HTMLElement>('#chmod-symbolic');

const weight: Record<string, number> = { r: 4, w: 2, x: 1 };

const compute = () => {
  const perms: Record<'u' | 'g' | 'o', string[]> = { u: [], g: [], o: [] };

  checks.forEach((check) => {
    const token = check.dataset.perm;
    if (!token) return;
    const [who, perm] = token.split('-') as ['u' | 'g' | 'o', 'r' | 'w' | 'x'];
    if (check.checked) perms[who].push(perm);
  });

  const digit = (list: string[]) => list.reduce((sum, item) => sum + weight[item], 0);
  const octal = `${digit(perms.u)}${digit(perms.g)}${digit(perms.o)}`;
  const symbolic = `u+${perms.u.join('') || '-'},g+${perms.g.join('') || '-'},o+${perms.o.join('') || '-'}`;

  if (octalOutput) octalOutput.textContent = octal;
  if (symbolicOutput) symbolicOutput.textContent = symbolic;
};

checks.forEach((check) => check.addEventListener('change', compute));
compute();
