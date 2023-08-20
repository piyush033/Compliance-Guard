from flask import Flask, render_template, request, jsonify
from llama_cpp import Llama

app = Flask(__name__)

llm = Llama(model_path="/content/llama-2-13b-chat.ggmlv3.q6_K.bin")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        input_text = request.form['prompt']
        output = llm(input_text, max_tokens=300, echo=True)
        return jsonify({'generated_text': output})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
