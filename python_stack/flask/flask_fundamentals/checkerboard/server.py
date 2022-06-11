from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def size8by8():
    return render_template("index.html", x=8, y=8)

@app.route('/<int:x>')
def size8byy(x):
    return render_template("index.html", x=x, y=8)

@app.route('/<int:x>/<int:y>')
def sizexbyy(x, y):
    return render_template("index.html", x=x, y=y)

if __name__=="__main__":
    app.run(debug=True)