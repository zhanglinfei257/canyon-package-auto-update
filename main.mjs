// const { exec } = require('child_process');
import {exec} from 'child_process';
function gitClone(repoUrl, targetDir) {
    const command = `git clone ${repoUrl} ${targetDir} && cd canyon && git checkout refactor-main && pnpm i && pnpm build`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

const repoUrl = 'https://github.com/canyon-project/canyon.git'; // Replace with your repository URL
const targetDir = ''; // Replace with your target directory

gitClone(repoUrl, targetDir);
