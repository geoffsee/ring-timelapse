# ring-timelapse

### Introduction
Creates a timelapse from snapshots captured in between motion events on ring cameras with snapshots enabled. Built on top of [dgreif/ring](https://github.com/dgreif/ring). Written in a day...sorry for the quality!

### Requirements
- Node >=v16
- Yarn 2 (berry)
- ffmpeg

### Installation
console
```
## Install the dependencies
yarn install
## Authenticate to ring and copy refreshToken into a file called .token
yarn getToken 
## Executes this against the ring API.
yarn doIt 

```

### Planned Features
- Publish this to npm as a cli
- After the initial time-lapse is built, it would be nice to have this running as a cron job that would spin up, fetch the last day of snapshots, concat those, and then push that result onto the end of an initial video.   
- Ring doesn't seem to keep snapshots beyond a certain date range, need to figure out exactly what that range is to maximize the amount of data retrieved to build the initial time-lapse.
