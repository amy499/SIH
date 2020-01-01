from flask import Flask,sessions,request,render_template,url_for

app = Flask(__name__)

"""
This is the default route.
It renders the index page.
"""
@app.route("/")
def index():
    return "Hello World"

"""
Route for user accessing user info.
"""
@app.route("/user")
def getUserInfo():
    return "User Info"

"""
Route for registering a new user
"""
@app.route("/user/new")
def getRegistrationForm():
    return "Registration Form"
@app.route("/user",methods=["POST"])
def registerUser():
    return "Registered"

"""
Loggin user
"""
@app.route("/login")
def login():
    return "LoggedIn"

"""LogOut"""
@app.route("/logout")
def logout():
    return "logged out"
"""
Complaint Routes
"""
@app.route("/complaint",methods=["GET","POST"])
def complaint():
    if request.method =="GET":
        return "Lots of Compaints"
    elif request.method == "POST":
        print(request.form)
        return "Complaint filed"
@app.route("/complaint/new")
def newComplaint():
    return render_template("/Complaints/register.html",target=url_for('complaint'))
@app.route("/complaint/edit")
def editComplaint():
    return "Edit your complaints here"
@app.route("/complaint",methods=["DELETE"])
def deleteComplaint():
    return "Delete your Complaints here"

"""Statistics Route"""
@app.route("/stats")
def stats():
    return "Show stats here"

if __name__ == "__main__":
    app.run(port=5000,debug=True)
