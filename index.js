import { spawn } from 'child_process';


function FF_Divisional_Rival_Scheduler() {
    const pythonProcess = spawn('python3', ['ff_divisional_scheduler.py']);
    
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python output:\n ${data}`);
    });
    
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);
    });
    
    pythonProcess.on('close', (code) => {
      console.log(`Python process exited with code ${code}`);
    });
  }
  
  export default FF_Divisional_Rival_Scheduler