import os
import requests 
from flask import Flask, request

from dotenv import load_dotenv

load_dotenv
print(os.environ)

UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_KEY = '7FiaGyvFRZdSY3X-JJHp3P9GP0kaCe5f4hZ-aD83kY0'

app = Flask(__name__)

@app.route("/new_image")
def new_image():
    word = request.args.get("query")
    
    # 1. FIRST, define the headers and params dictionaries
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY  # Fixed: Added a space after "Client-ID"
    }
    params = {
        "query": word
    }
    
    # 2. THEN, use them in the request
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    print(response.json())  # Better to print the JSON response to see the data
    return response.json()  # Return the actual API response

def hello():
    return "Hello, World"

app.route("/")(hello)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)