import os

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    provider = str(os.environ.get('PROVIDER', 'Salsa'))
    return 'Hello '+provider+'!'

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 4000.
    port = int(os.environ.get('PORT', 4000))
    app.run(host='0.0.0.0', port=port)
