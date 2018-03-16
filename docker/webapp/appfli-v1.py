import os

from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

@app.route('/')

def index_fli():
    # url_for('static', filename='homepage_style.css')
    return render_template('index_fli.html', name='salsa')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 4000.
    port = int(os.environ.get('PORT', 4000))
    app.run(host='0.0.0.0', port=port)
