from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "<h1>Hello World</h1>"

@app.route('/dojo')
def dojo():
    return "<h1>Dojo</h1>"

@app.route('/say/<text>')
def say(text):
    return f"<h1>Hi {text}!</h1>"

@app.route('/repeat/<int:num>/<text>')
def repeat(num, text):
    return f"<h2>{text}</h2>"*int(num)

@app.errorhandler(404) 
def invalid_route(e):
    return "<h1>Sorry! No response. Try again.</h1>"
if __name__=="__main__":
    app.run(debug=True)