import { PeriodicalFootage } from "ring-client-api";
import Client from "./client";
import AppContainer from "./container";
import { ffmpegConcatMp4FromDir } from "./ffmpeg";
import Utils from "./utils";

async function RunApp() {
    const client = new Client();
    await client.initClient();

    const container = new AppContainer(client);

    const cameras = await container.client.ringApi?.getCameras();

    if (cameras) console.log("Found cameras")

    const downstairsCamera = cameras!.filter((camera) => camera.name === "Downstairs")[0];

    if (downstairsCamera) console.log("Connected!")

    const start = new Date(Date.parse("1-24-2022")).getTime();
    const end = Date.now();

    const snapShots = downstairsCamera.getPeriodicalFootage({ startAtMs: start, endAtMs: end }).then((result) => {
        if (result) return result
    }).then((footage) => {
        return footage?.data
    }).then((data?: PeriodicalFootage[]) => { return data?.map((d) => { return { url: d.url, fileName: d.start_ms } }) });

    let counter: number = 0;
    Promise.resolve(snapShots).then(async (sss) => {
        if (sss) {
            sss.forEach((snapShot) => {
                Utils.downloadFile(snapShot)
                counter++;
            })
            console.log(`done, exported ${counter} images`)
        }
    });
    ffmpegConcatMp4FromDir("out")
    console.log("done! file is available at all.mp4")
}

RunApp()