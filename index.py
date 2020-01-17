from flask import Flask,sessions,request,render_template,url_for
from Data import complaint,login_

app = Flask(__name__)
login_details={"username":["Abhishek","Atharva","Saurabh"],"password":["123456","2345","123"]}
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
@app.route("/login",methods=["GET","POST"])
def login():
    if request.method =="GET":
        return render_template("login.html")
    elif request.method == "POST":
        data= request.form
        data= login_(username=data["username"],password=data["password"])
        x=data.validate(login_details)
        print(x)
        if x == ["Logged in successfully"]:
          return "LoggedIn"
        else:
            print(x)
            return "Error logging in"

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
        return render_template("complaint.html")
    elif request.method == "POST":
        data= request.form
        data=complaint(broad_category=data["Broadcategory"],sub_category=data["Subcategory"],Subject=data["Subject"],description=data["Description"])
        x = data.validate()
        if x == "validated":
            return "complaint registered successfully"
        else:
            print(x)
            return "Error in form input"

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


