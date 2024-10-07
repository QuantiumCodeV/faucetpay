import requests
import os

def download_scripts(base_url, script_names, download_path):
    if not os.path.exists(download_path):
        os.makedirs(download_path)
    
    for script_name in script_names:
        url = f"{base_url}{script_name}"
        response = requests.get(url)
        
        if response.status_code == 200:
            with open(os.path.join(download_path, script_name), 'wb') as file:
                file.write(response.content)
            print(f"Downloaded: {script_name}")
        else:
            print(f"Failed to download: {script_name}")

base_url = "https://faucetpay.io/static/js/"
script_names = [
    "164.a614ab97.chunk.js",
    "169.ae5d79a4.chunk.js",
    "179.537cb00a.chunk.js",
    "147.ce8a1043.chunk.js"

]
download_path = "downloaded_scripts"

download_scripts(base_url, script_names, download_path)
