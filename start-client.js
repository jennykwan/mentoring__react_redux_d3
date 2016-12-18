const childProcess = require('child_process');

const args = ['start'];
const opts = {
  stdio: 'inherit',
  cwd: 'client',
  shell: true
}
childProcess.spawn('npm', args, opts);
