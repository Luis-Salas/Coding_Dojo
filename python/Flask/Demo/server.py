from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/otherRoute')
def otherMethod():
    return render_template('index.html')

@app.route('/practice')
def practice():
    return render_template('practice.html')

@app.route('/process', methods=["POST"])
def process():
    print '='*80
    print request.form
    print '='*80
    return render_template('info.html', info=request.form)
app.run(debug=True)
