import os
import openai
from dotenv import load_dotenv

load_dotenv()

# Set up OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Athena is a large language model trained by Tony Stark the Iron Man"},
        {"role": "user", "content": "Tell me a random fun fact:"}
    ],
    max_tokens=20)

print(response.choices.pop().message.content)
