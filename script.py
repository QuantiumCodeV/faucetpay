import requests
import os

def download_scripts(base_url, download_path):
    if not os.path.exists(download_path):
        os.makedirs(download_path)
    
    script_hashes = {
        "0": "31d6cfe0", "1": "31d6cfe0", "2": "31d6cfe0", "3": "31d6cfe0", "4": "31d6cfe0",
        "5": "31d6cfe0", "6": "31d6cfe0", "7": "31d6cfe0", "8": "31d6cfe0", "9": "ba430150",
        "10": "4d18e9cb", "11": "e78a1860", "12": "31d6cfe0", "13": "e2e9371b", "14": "31d6cfe0",
        "15": "31d6cfe0", "16": "94eb3b45", "17": "31d6cfe0", "18": "31d6cfe0", "21": "1ce74c0c",
        "22": "0fcca7d1", "23": "47df5488", "24": "c716b724", "25": "6662326e", "26": "5014d141",
        "27": "eee79059", "28": "8f7b094b", "29": "8fa4b0f5", "30": "058b22f3", "31": "2ec0858a",
        "32": "3dc945b2", "33": "af5c7180", "34": "bc4a5219", "35": "5652ea06", "36": "31d6cfe0",
        "37": "e93fe367", "38": "4569eafb", "39": "b52c75fd", "40": "7a1e6766", "41": "5effb257",
        "42": "46632da9", "43": "5bdc9d3f", "44": "b59e75b8", "45": "df5d6b71", "46": "faca7318",
        "47": "bec4656e", "48": "c2090826", "49": "e2f7da68", "50": "02ad3f73", "51": "c4ec49db",
        "52": "8ca46b9c", "53": "7ded1e5b", "54": "31d6cfe0", "55": "12791da8", "56": "7194f9a1",
        "57": "068062a6", "58": "09d04890", "59": "a7ed209d", "60": "53725fdc", "61": "31d6cfe0",
        "62": "8a6ccd42", "63": "31d6cfe0", "64": "d435dcdf", "65": "cc349821", "66": "ca813922",
        "67": "39c2a204", "68": "f57eee31", "69": "16951f65", "70": "a658275e", "71": "eaf7e12c",
        "72": "d527f78c", "73": "9746f956", "74": "f2a1ea3f", "75": "31d6cfe0", "76": "b1ba3f68",
        "77": "3d1c5d47", "78": "1859983c", "79": "efbdceca", "80": "1d6e2e17", "81": "f6240f3e",
        "82": "df0fd439", "83": "31d6cfe0", "84": "f2f7f99f", "85": "d9914021", "86": "57ef7c3f",
        "87": "5ff2681c", "88": "736f4ebe", "89": "31d6cfe0", "90": "5c37cbd1", "91": "d4639c31",
        "92": "0179b2dd", "93": "0332fb05", "94": "f13b8be5", "95": "1c98af80", "96": "f886e617",
        "97": "1b0af1c2", "98": "3c3b7c51", "99": "afc987ea", "100": "47278daf", "101": "91ad38f8",
        "102": "d2500388", "103": "c1efce36", "104": "31d6cfe0", "105": "47278daf", "106": "dc5a69b4",
        "107": "31d6cfe0", "108": "31d6cfe0", "109": "3f8471dc", "110": "80597318", "111": "37791915",
        "112": "31d6cfe0", "113": "077aa34d", "114": "fa05d487", "115": "5fca3fb1", "116": "31d6cfe0",
        "117": "a8e806c5", "118": "d7166c5a", "119": "31d6cfe0", "120": "76eb768b", "121": "e393b5d1",
        "122": "cec20bc2", "123": "44685ddd", "124": "78c2ac53", "125": "2a343ab8", "126": "fb174d8d",
        "127": "31d6cfe0", "128": "31d6cfe0", "129": "31d6cfe0", "130": "31d6cfe0", "131": "31d6cfe0",
        "132": "31d6cfe0", "133": "31d6cfe0", "134": "31d6cfe0", "135": "31d6cfe0", "136": "31d6cfe0",
        "137": "31d6cfe0", "138": "31d6cfe0", "139": "31d6cfe0", "140": "31d6cfe0", "141": "31d6cfe0",
        "142": "31d6cfe0", "143": "31d6cfe0", "144": "31d6cfe0", "145": "31d6cfe0", "146": "31d6cfe0",
        "147": "31d6cfe0", "148": "31d6cfe0", "149": "31d6cfe0", "150": "31d6cfe0", "151": "31d6cfe0",
        "152": "31d6cfe0", "153": "31d6cfe0", "154": "31d6cfe0", "155": "31d6cfe0", "156": "31d6cfe0",
        "157": "31d6cfe0", "158": "31d6cfe0", "159": "31d6cfe0", "160": "31d6cfe0", "161": "31d6cfe0",
        "162": "31d6cfe0", "163": "31d6cfe0", "164": "31d6cfe0", "165": "31d6cfe0", "166": "31d6cfe0",
        "167": "31d6cfe0", "168": "31d6cfe0", "169": "31d6cfe0", "170": "31d6cfe0", "171": "31d6cfe0",
        "172": "31d6cfe0", "173": "31d6cfe0", "174": "31d6cfe0", "175": "31d6cfe0", "176": "31d6cfe0",
        "177": "31d6cfe0", "178": "31d6cfe0", "179": "31d6cfe0", "180": "31d6cfe0", "181": "31d6cfe0",
        "182": "31d6cfe0", "183": "31d6cfe0", "184": "31d6cfe0", "185": "31d6cfe0", "186": "31d6cfe0",
        "187": "31d6cfe0", "188": "31d6cfe0", "189": "31d6cfe0", "190": "31d6cfe0", "191": "31d6cfe0",
        "192": "31d6cfe0", "193": "31d6cfe0", "194": "31d6cfe0", "195": "31d6cfe0", "196": "31d6cfe0",
        "197": "31d6cfe0", "198": "31d6cfe0", "199": "31d6cfe0", "200": "31d6cfe0", "201": "31d6cfe0",
        "202": "31d6cfe0", "203": "31d6cfe0", "204": "31d6cfe0", "205": "31d6cfe0", "206": "31d6cfe0",
        "207": "31d6cfe0", "208": "31d6cfe0", "209": "31d6cfe0", "210": "31d6cfe0", "211": "31d6cfe0",
        "212": "31d6cfe0", "213": "31d6cfe0", "214": "31d6cfe0", "215": "31d6cfe0", "216": "31d6cfe0",
        "217": "31d6cfe0", "218": "31d6cfe0", "219": "31d6cfe0", "220": "31d6cfe0", "221": "31d6cfe0",
        "222": "31d6cfe0", "223": "31d6cfe0", "224": "31d6cfe0", "225": "31d6cfe0", "226": "31d6cfe0",
        "227": "31d6cfe0", "228": "31d6cfe0", "229": "31d6cfe0", "230": "31d6cfe0", "231": "31d6cfe0",
        "232": "31d6cfe0", "233": "31d6cfe0", "234": "31d6cfe0", "235": "31d6cfe0", "236": "31d6cfe0",
        "237": "31d6cfe0", "238": "31d6cfe0", "239": "31d6cfe0", "240": "31d6cfe0", "241": "31d6cfe0",
        "242": "31d6cfe0", "243": "31d6cfe0", "244": "31d6cfe0", "245": "31d6cfe0", "246": "31d6cfe0",
        "247": "31d6cfe0", "248": "31d6cfe0", "249": "31d6cfe0", "250": "31d6cfe0", "251": "31d6cfe0",
        "252": "31d6cfe0", "253": "31d6cfe0", "254": "31d6cfe0", "255": "31d6cfe0", "256": "31d6cfe0",
        "257": "31d6cfe0", "258": "31d6cfe0", "259": "31d6cfe0", "260": "31d6cfe0", "261": "31d6cfe0",
        "262": "31d6cfe0", "263": "31d6cfe0", "264": "31d6cfe0", "265": "31d6cfe0", "266": "31d6cfe0",
        "267": "31d6cfe0", "268": "31d6cfe0", "269": "31d6cfe0", "270": "31d6cfe0", "271": "31d6cfe0",
        "272": "31d6cfe0"
    }
    
    for script_num, script_hash in script_hashes.items():
        script_name = f"{script_num}.{script_hash}.chunk.js"
        css_name = f"{script_num}.{script_hash}.chunk.css"
        
        # Скачиваем JavaScript файл
        #js_url = f"{base_url}js/{script_name}"
        #print(js_url)
        #download_file(js_url, os.path.join(download_path, script_name))
        
        # Скачиваем CSS файл
        css_url = f"{base_url}css/{css_name}"
        print(css_url)
        download_file(css_url, os.path.join(download_path, css_name))

def download_file(url, file_path):
    response = requests.get(url)
    if response.status_code == 200:
        with open(file_path, 'wb') as file:
            file.write(response.content)
        print(f"Скачано: {file_path}")
    else:
        print(f"Не удалось скачать: {url}")

base_url = "https://faucetpay.io/static/"
download_path = "downloaded_scripts"

download_scripts(base_url, download_path)
