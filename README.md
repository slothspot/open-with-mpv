#Open with mpv
Addon to open videos with mpv (given youtube-dl installed as well as mpv).

## Motivation

Playback of youtube videos in Firefox on OSX without flash plugin installed
is very resources consuming (looks like that HW acceleration doesn't work properly),
so I decided to use mpv video player with working HW acceleration for this purpose.

## Build extension

jpm xpi

## Install extension

### Disable signature verification in Firefox

In about:config set xpinstall.signatures.required to false

### Install

Open @open-with-mpv-0.0.1.xpi in Firefox to install extension
