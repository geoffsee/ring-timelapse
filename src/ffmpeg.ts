import { runCmd } from "./cmdRunner";

export async function ffmpegConcatMp4FromDir(dir: string) {
  const files = await retrieveListOfMp4FromDir(dir);
  const filesListFile = writeListToFile(files);
  const args = `-f concat -safe 0 -i ${filesListFile} -c copy -bsf:v h264_mp4toannexb all.mp4 -loglevel debug`
  runCmd("ffmpeg", args.split(" "))
  cleanup(filesListFile);
}

export async function retrieveListOfMp4FromDir(dir: string): Promise<string[]> {
  const fs = require('fs');
  const paths: string[] = fs.readdirSync(dir)
  paths.sort((a, b) => {
    const aNum = parseInt(a.replace('file ', '').replace('.mp4', ''))
    const bNum = parseInt(a.replace('file ', '').replace('.mp4', ''))
    return aNum - bNum;
  })

  return paths.filter((file) => !file.includes('dir')).map((file) => `${file}`);
}

export function writeListToFile(files: string[], outputFile: string = 'out/dir.txt'): string {
  const fs = require('fs');
  files.forEach((file, index) => {
    const writePath = index > 0 ? `\nfile '${file}'` : `file '${file}'`
    fs.appendFile(outputFile, writePath, function (err: Error) {
      if (err) {
        throw err;
      } else {
        return;
      }
    })
  })
  return outputFile;
}

function cleanup(file: string) {
  const fs = require('fs');
  fs.truncate(file, 0, function () { console.log('clean up done') })
}