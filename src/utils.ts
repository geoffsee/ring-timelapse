import { Http2ServerResponse } from "http2";

export interface DownloadArgs {
    url: string;
    fileName: string | number;
} 

class Utils {
    static downloadFile(args: DownloadArgs) {
        const http = require('https');
        const fs = require('fs');

        http.get(args.url, function (response: Http2ServerResponse) {
            response.pipe(fs.createWriteStream(`out/${args.fileName}.mp4`));
        });
    }
}

export default Utils;