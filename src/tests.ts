import { execa } from 'execa';
import { readFileSync } from 'fs';
import { Http2ServerResponse } from 'http2';
import { runCmd } from './cmdRunner';
import { ffmpegConcatMp4FromDir, retrieveListOfMp4FromDir, writeListToFile } from './ffmpeg';
// function token(): string {
//     let value = readFileSync('.token', 'utf-8');
//     return value;
// }

// function downloadFile() {
// const http = require('https'); // or 'https' for https:// URLs
// const fs = require('fs');

// const file = fs.createWriteStream("move.mp4");
// const request = http.get(url, function(response: Http2ServerResponse) {
//   response.pipe(file);
// });
// }
// downloadFile()

// function concatMp4() {
//     ffmpeg()
// }

// concatMp4()

// async function testReadDir() {
//     writeListToFile(await retrieveListOfMp4FromDir('out'), "text.txt")

// }
// testReadDir()



// async function testWriteListToFile() {
//     const fakeList = ["1", "2", "3"]
//     await writeListToFile(fakeList, "out/test.txt")
// }
// testWriteListToFile();

// async function Test_ffmpegConcatMp4FromDir() {
//     ffmpegConcatMp4FromDir("out")
// }

// Test_ffmpegConcatMp4FromDir();
