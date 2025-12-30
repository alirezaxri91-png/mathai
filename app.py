from flask import Flask request jsonify

app = Flask(__name__)

@app.route("/ask" methods=["POST"])
def ask():
    data = request.json
    question = data["question"]

    answer = f"""
# کد پایتون برای حل سوال
# {question}

print("این پاسخ توسط هوش مصنوعی ساخته شده")
"""

    return jsonify({"answer": answer})

app.run()
