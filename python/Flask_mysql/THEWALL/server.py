from flask import Flask, render_template, request, redirect, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from mysqlconnection import MySQLConnector

app = Flask (__name__)
mysql = MySQLConnector(app, 'theWall')
app.secret_key = 'secret_key'

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/register', methods=["POST"])
def register():
    print '[]' *100
    valid_form = True
    print request.form
    if len(request.form['first_name']) == 0 or len(request.form['last_name']) == 0 or len(request.form['email']) == 0 or len(request.form['password']) == 0 or len(request.form['confirm_password']) == 0:
        valid_form = False
        flash('Please fill out the whole form')
    if not request.form['first_name'].isalpha():
        valid_form = False
        flash('no special characters allowed in first name')
    if not request.form['last_name'].isalpha():
        valid_form = False
        flash('no special characters allowed in last name')
    if not EMAIL_REGEX.match(request.form['email']):
        valid_form = False
        flash('invalid email')
    if len(request.form['password']) < 8:
        valid_form = False
        flash('password has to be more than 8 characters')
    if not request.form['password'] == request.form['confirm_password']:
        valid_form = False
        flash('confirm password does not match')
    if not valid_form:
        return redirect('/')
    else:
        query = 'INSERT INTO users(first_name, last_name, email, password, update_at, created_at) VALUES(:first_name,:last_name,:email,:password,NOW(),NOW())'

        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': request.form['password']
        }

        mysql.query_db(query, data)
        flash('succesful registered')
        return redirect('/')
@app.route('/login', methods=["POST"])
def login():
    print '~~~~~' *20
    query = 'SELECT * FROM users WHERE email = :email AND password = :password'
    data = {
        'email': request.form['email'],
        'password': request.form['password']
    }
    user_info = mysql.query_db(query, data)
    print 'blah'
    print user_info
    print user_info[0]
    session["name"] = user_info[0]['first_name'] + ' ' + user_info[0]['last_name']
    session["id"] = user_info[0]['id']
    print session["name"]
    if data['email'] == user_info[0]['email']:
        print 'aww yeah'

    if data['password'] == user_info[0]['password']:
        print 'nicee'
        flash('you are logged in')

        return redirect('/wall')

@app.route('/wall', methods=['get'])
def wall():
    messages_query = 'SELECT * FROM messages WHERE users_id =' + str(session["id"])
    user_message = mysql.query_db(messages_query)
    return render_template('wall.html', messages=user_message)


@app.route('/message', methods=['POST'])
def message():
    print '~~~~' * 50
    insert_query = 'INSERT INTO messages(users_id,message, updated_at, created_at) VALUES(:id,:message,NOW(),NOW())'
    data = {
        'message': request.form['message'],
        'id': session['id']
    }
    mysql.query_db(insert_query, data)
    return redirect ('/wall')
    flash(user_message)

@app.route('/message_val', methods=['POST'])
def message_val():
    valid_message = True
    if len(request.form['message']) == 0:
        valid_message = False
        flash('this is not a valid post')
        print 'no! bad'
    return redirect('/wall')

app.run(debug=True)
