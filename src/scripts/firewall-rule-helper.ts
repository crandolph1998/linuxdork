export {};

const actionInput = document.querySelector<HTMLSelectElement>('#action');
const portInput = document.querySelector<HTMLInputElement>('#port');
const protocolInput = document.querySelector<HTMLSelectElement>('#protocol');
const sourceInput = document.querySelector<HTMLInputElement>('#source');
const ufwOutput = document.querySelector<HTMLElement>('#ufw-output');
const firewalldOutput = document.querySelector<HTMLElement>('#firewalld-output');

const render = () => {
  const action = actionInput?.value ?? 'allow';
  const port = portInput?.value.trim() || '443';
  const protocol = protocolInput?.value ?? 'tcp';
  const source = sourceInput?.value.trim();

  const ufw = source
    ? `sudo ufw ${action} from ${source} to any port ${port} proto ${protocol}`
    : `sudo ufw ${action} ${port}/${protocol}`;

  const fwAction = action === 'allow' ? '--add-port' : '--remove-port';
  const fw = source
    ? `sudo firewall-cmd --permanent --zone=public --${action === 'allow' ? 'add-rich-rule' : 'remove-rich-rule'}='rule family="ipv4" source address="${source}" port protocol="${protocol}" port="${port}" ${action}'`
    : `sudo firewall-cmd --permanent ${fwAction}=${port}/${protocol}`;

  if (ufwOutput) ufwOutput.textContent = ufw;
  if (firewalldOutput) firewalldOutput.textContent = `${fw}\nsudo firewall-cmd --reload`;
};

[actionInput, portInput, protocolInput, sourceInput].forEach((el) => el?.addEventListener('input', render));
render();
