import pyttsx3
engine = pyttsx3.init()

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[33].id)

engine.say("Hello world")
engine.runAndWait()
