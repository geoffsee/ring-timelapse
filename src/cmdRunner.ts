export async function runCmd(cmd: string, args: string[]) {
    const { spawn } = require("child_process");

    const ls = spawn(cmd, args);
    
    ls.stdout.on("data", (data:any) => {
        console.log(`stdout: ${data}`);
    });
    
    ls.stderr.on("data", (data:any) => {
        console.log(`stderr: ${data}`);
    });
    
    ls.on('error', (error: any) => {
        console.log(`error: ${error.message}`);
    });
    
    ls.on("close", (code: any) => {
        console.log(`child process exited with code ${code}`);
    });
}