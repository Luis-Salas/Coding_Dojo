from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/', methods=["GET"])
def counter():
    sumSessionCounter()
    return render_template('count.html')

def sumSessionCounter():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 1


app.run(debug=True)
