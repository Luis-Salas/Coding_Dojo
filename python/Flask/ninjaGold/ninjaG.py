from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def gold():
    session['gold'] = 0
    return render_template('index.html')

@app.route('/process_money', methods=["POST"])
def gold_count():
    a = []
    if request.form['building'] == 'farm':
        money = random.randrange(10,21)
    elif request.form['building'] == 'cave':
        money = random.randrange(0,11)
    session['gold'] += money
    session['response'] +='you got', money, 'coins at the farm!'
    a += response
    print a
    return render_template('index.html', transaction = a)

    # elif request.form['building'] == 'house':
    #     money = random.randrange(10,21)
    #     session['gold'] += money
    #     session['acti2'] = 'you got', money, 'coins at your house!'
    # elif request.form['building'] == 'casino':
    #     money = random.randrange(10,21)
    #     session['gold'] += money
    #     session['acti3'] = 'you got', money, 'coins at the casino'


app.run(debug=True)
