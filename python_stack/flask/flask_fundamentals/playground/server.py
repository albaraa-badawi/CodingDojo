from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def level1():
    return render_template("index.html", box_color="deepskyblue", times=3)

@app.route('/play/<int:times>')
def level2(times):
    return render_template("index.html", box_color="deepskyblue", times=times)

@app.route('/play/<int:times>/<string:color>')
def level3(times, color):
    return render_template("index.html", box_color=color, times=times)

if __name__=="__main__":
    app.run(debug=True)