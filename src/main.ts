import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { wait } from './wait'

async function run() {
  try {
    const token = core.getInput('token');

    // Download the latest platform CLI release
    await exec.exec("curl -L https://github.com/platformsh/platformsh-cli/releases/latest/download/platform.phar  -o platform");
    // Make it executable
    await exec.exec("chmod +x platform");
    // Move it so it to the user's /bin 
    await exec.exec("sudo mv platform /usr/local/bin/platform");

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
