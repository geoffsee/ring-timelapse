import { execa } from 'execa';
import { readFileSync } from 'fs';
import { Http2ServerResponse } from 'http2';
import { runCmd } from './cmdRunner';
import { ffmpegConcatMp4FromDir, retrieveListOfMp4FromDir, writeListToFile } from './ffmpeg';
// function token(): string {
//     let value = readFileSync('.token', 'utf-8');
//     return value;
// }

// const url = 'https://filestore-734410259931-us-east-1-prod-data.s3.amazonaws.com/4be4742f-1c51-495e-ab7a-76eced0792de.mp4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBVYtTojtghQn6Z3gKhWOsslexiMXrs9CSbzm%2FtAsZU1AiAZkyawBt4Z1mLQrjRT5%2FGMSe3AlYXEoOjUi7c8fBtqfCr6AwgSEAAaDDczNDQxMDI1OTkzMSIMEUVWvZHE9rf6SoXnKtcDpDi5WBsPN1%2BSzWCv8V%2BUZgeqiZvQ5MmELbYAYp0%2FdsGSgEVgpQZ95dLxC3Ex9NLUjjvRQ5gnU%2Bg4ckLrcnGxk%2BFx1vgd%2BKE5ZfWcE97tF9RUB%2FHyINIuQkuImvtUwEIj9WRXSx0%2FP9m%2FiEZCeFzpL2tMiCrbAjfT%2B2f1OSDNPmMQ6TbzjR0z7yQ9WaNFVqVhMmq%2FqrQJTc5L%2B0B3As1I%2BrezYq%2BA1uPN3bQ%2FXg%2BgubZL9jtQkevV5T2qwCucbSUKfhOHmhTbaDBZM31HBgShNp2BESzt%2BXZnd1qeRCa%2BXMMqhPq9IuGkbMcWHuYHI6YR0EKDZUzo3RLz0h%2FGzdWXLnRhtDDkeBfcKiyMOiriGEZ%2F%2Fdw94ySsRXuU2EMn8depTh7K%2FMWtrakAsR0GT79YEGh4jGqMg%2BC3Bj6Ko4ade22vV7vXdSpxuBvJ%2BqYexMip%2BtFE4bKqcRGdqZS0pJGfgbGQYpJjGUwJA01wP0v6Buf6erWrzvxwOeZPvNOryYsb90N5z9LKUSJwJuByyYLc5vGx6b490JneDANfP0mO8%2BUblMIYaINacBtfAOnVsX8xwzAb9SOGjplgCAMJyg3JcGAiHtvzfCnD8klaECf6UOh7ZGY2MZv7MNGh2Y8GOqYB3XpyPN21JSMLae0J5Hz%2FZk4tpQdgaDGL0O16ShV62IN6luOzarNmWhNlu%2BrA88o5Vl62ySrVHb8l0dux5lG%2FnrVirhoQw%2BH0ZEnvGx3GJVIDYRLuT6kqnfgPiUII5zYw9xWV6Lwsh5hFWa0whVxjpfYSWyzE611s7MhnLmQMcscTwNX2GjhhDqB019O6win5u6vaDusXClWIoZZVIM7r1WfP88zqEw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220130T094839Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2V7SDHXNYNIJJI6V%2F20220130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9765b7acd5b003c1f6e286ebf0f407abf9af6b4a15e3a7c409bd966df15e45ca'

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