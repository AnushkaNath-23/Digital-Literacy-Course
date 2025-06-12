from flask import Flask, request, jsonify
from google.cloud import dialogflow_v2 as dialogflow
import os
import uuid
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set path to your service account JSON file
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "service_account_file.json"

# Set your Dialogflow project ID
PROJECT_ID = "digital-literacy-course-9d33e"  # Replace with your actual Dialogflow project ID

@app.route("/api/dialogflow", methods=["POST"])
def detect_intent():
    try:
        data = request.get_json()
        user_message = data.get("message", "")
        language_code = data.get("languageCode", "en")
        session_id = str(uuid.uuid4())

        session_client = dialogflow.SessionsClient()
        session = session_client.session_path(PROJECT_ID, session_id)

        text_input = dialogflow.TextInput(text=user_message, language_code=language_code)
        query_input = dialogflow.QueryInput(text=text_input)

        response = session_client.detect_intent(request={"session": session, "query_input": query_input})

        fulfillment_text = response.query_result.fulfillment_text
        return jsonify({"fulfillmentText": fulfillment_text})
    except Exception as e:
        import traceback
        print(f"Detailed Error: {traceback.format_exc()}")
        print(f"Error: {e}")
        return jsonify({"fulfillmentText": "Sorry, something went wrong."}), 500

if __name__ == "__main__":
    app.run(debug=True)
