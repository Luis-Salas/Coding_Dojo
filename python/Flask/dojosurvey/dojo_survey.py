from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=["POST"])
def process():
    print '='*80
    print request.form
    print '='*80
    return render_template('submit.html', info=request.form)

app.run(debug=True)
