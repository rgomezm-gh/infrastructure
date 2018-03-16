import os

from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

@app.route('/')

def index_fli():
    # url_for('static', filename='homepage_style.css')
    return render_template('index_fli.html', name='salsa')

@app.route('/fli_login.html')
def login():
    return render_template('fli_login.html')

@app.route('/fli_main.html')
def main():
    return render_template('fli_main.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_NOT_found.html'), 404

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 4000.
    port = int(os.environ.get('PORT', 4000))
    app.run(host='0.0.0.0', port=port)
