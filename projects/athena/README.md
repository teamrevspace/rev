# Project Athena

## Tech Stack
- Google Coral Dev Board Micro
- Tensorflow
- OpenAI GPT-3
- Segment Anything Model
- Google Cloud API

## Commands
The available commands are in the [Makefile](./Makefile). Wehn you are in serial console mode, press `CTRL + A, K` then `y` to quit the session.

## Tasks
- General object detection
  - https://github.com/google-coral/examples-camera
- Hugging face face detetction
  - Web scraping for faces (contacts) on social media
- Keyphrase detector (better Alexa)
  - Define a list of keyphrases and tasks/prompts to be trained on
  - https://github.com/google-coral/project-keyword-spotter
- Connect to an audio output for text-to-speech


## Goals
- Set up the board (Coral / Raspberry / Jetson)
- Basic object detection (get the camera and modal working)
- Hey Athena (voice recognition)
- Take a photo when it recognizes a face
- Tell a joke when it detects a person's face
- Listen to keyphrase "Hey Athena" and respond with "I'm here"
- Run a zero-shot generalization model like Segment Anything to recognize people vs object
- Hands-free object labelling by adding a crop box around the object mask


## Ideas
- Potentially train the AI in real-time to learn unrecognized objects by asking the user and answering.

