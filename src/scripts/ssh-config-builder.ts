export {};

const hostInput = document.querySelector<HTMLInputElement>('#host');
const hostnameInput = document.querySelector<HTMLInputElement>('#hostname');
const userInput = document.querySelector<HTMLInputElement>('#user');
const portInput = document.querySelector<HTMLInputElement>('#port');
const identityInput = document.querySelector<HTMLInputElement>('#identity');
const agentInput = document.querySelector<HTMLSelectElement>('#agent');
const output = document.querySelector<HTMLElement>('#ssh-output');

const render = () => {
  const host = hostInput?.value.trim() || 'server';
  const hostname = hostnameInput?.value.trim() || '203.0.113.10';
  const user = userInput?.value.trim() || 'root';
  const port = portInput?.value.trim() || '22';
  const identity = identityInput?.value.trim() || '~/.ssh/id_ed25519';
  const forwardAgent = agentInput?.value ?? 'no';

  const text = `Host ${host}\n  HostName ${hostname}\n  User ${user}\n  Port ${port}\n  IdentityFile ${identity}\n  ForwardAgent ${forwardAgent}\n  IdentitiesOnly yes`;

  if (output) output.textContent = text;
};

[hostInput, hostnameInput, userInput, portInput, identityInput, agentInput].forEach((el) => el?.addEventListener('input', render));
render();
