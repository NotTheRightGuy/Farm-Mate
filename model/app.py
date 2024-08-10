import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import torchvision.transforms.functional as TF
import torch.nn.functional as F
import CNN
import numpy as np
import torch
import pandas as pd


disease_info = pd.read_csv("disease_info.csv", encoding="cp1252")
supplement_info = pd.read_csv("supplement_info.csv", encoding="cp1252")

model = CNN.CNN(39)
model.load_state_dict(torch.load("model.pt"))
model.eval()


def prediction(image_path):
    image = Image.open(image_path)
    image = image.resize((224, 224))
    input_data = TF.to_tensor(image)
    input_data = input_data.view((-1, 3, 224, 224))
    model.eval()
    with torch.no_grad():
        output = model(input_data)

    probabilities = F.softmax(output, dim=1).numpy().flatten()
    index = np.argmax(probabilities)
    confidence = probabilities[index]

    return index, confidence


app = Flask(__name__)
CORS(app)


@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        if "image" not in request.files:
            return jsonify({"error": "No image provided"}), 400

        image = request.files["image"]
        filename = image.filename
        file_path = os.path.join("static/uploads", filename)
        image.save(file_path)
        pred, confidence = prediction(file_path)

        # Fetching information based on the prediction
        title = disease_info["disease_name"][pred]
        description = disease_info["description"][pred]
        prevent = disease_info["Possible Steps"][pred]
        image_url = disease_info["image_url"][pred]
        supplement_name = supplement_info["supplement name"][pred]
        supplement_image_url = supplement_info["supplement image"][pred]
        supplement_buy_link = supplement_info["buy link"][pred]

        # Creating a dictionary to hold the response data
        response = {
            "title": title,
            "confidence": str(confidence * 100)[:5],
            "description": description,
            "prevent": prevent,
            "image_url": image_url,
            "supplement_name": supplement_name,
            "supplement_image_url": supplement_image_url,
            "supplement_buy_link": supplement_buy_link,
        }

        # Return the response as a JSON object
        return jsonify(response)

    return "Only POST method is allowed", 405


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
