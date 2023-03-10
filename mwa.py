import requests

chating=True

while chating:
    prompt = input("say something: ")
    if prompt=="embe":
        chating=False
        break 
    response=requests.get(f"http://localhost:5283?prompt={prompt}")
    print(response.text)