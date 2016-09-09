from flask import Flask, render_template, request, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    session['number']= random.randrange(0,101)
    print '============', session['number']
    return render_template('index.html')

@app.route('/user', methods=["POST"])
def res():
    result = ""
    if int(request.form['guess']) < session['number']:
        print 'low '*80
        result = 'number is too low'
    elif int(request.form['guess']) > session['number']:
        print 'high '*80
        result = 'number is too high'
    else:
        result = 'you got it!'
    return render_template('index.html',result= result)
app.run(debug=True)
