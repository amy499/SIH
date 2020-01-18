
from flask import Flask,sessions,request,render_template,url_for
from Data import complaint,login_
from dataBase import Complaint
import json
from validate import Login



app = Flask(__name__)
app.config['SECRET_KEY']='c8f198ab0ecb824b62b369e27357d343'

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
        complaint = Complaint()
        data = complaint.findComplaint(College="VIIT",Committee="XYZ")
        print(data)
        return data
    elif request.method == "POST":
        data= request.form
        print(data)
        """Inserting into database"""
        complaint = Complaint()
        complaint.insertOne(data=data)
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
"""
if __name__ == "__main__":
    app.run(port=5000,debug=True)
    """user=
    name=""
    data=[]
    names=[]
    if user == "committee member":
        member=commitee_member(name)
        member.unopened_complaint_bar(data=data)
        member.pie_chart_solved(name=names,data=data)
        member.complaint_remaining_bar(data=data)
        member.complaint_solved_bar(data=data)
    elif user=="committee incharge":
        from_=0
        to=1
        incharge=commitee_incharge(name)
        incharge.complaint_solved_bar(data=data,names=names)
        incharge.complaint_remaining_bar(data=data,names=names)
        incharge.unopened_complaint_bar(data=data,names=names)
        incharge.complaints_filed_solved_by_year(from_=from_,to=to,data_filed=[],data_solved=[])
        incharge.complaints_filed_solved_by_month(from_=from_,to=to,data_filed=[],data_solved=[])
        incharge.complaint_refiled_bar(data_refiled=data,names=names)
        incharge.complaints_assigned_priority_wise(names=names,data=data)   #2d numpy array should be passed"""


@app.route("/registercollege", methods=["GET","POST"])
def registerCollege():
   if request.method=="GET":
       return render_template("newCollegeRegistration.html")
   elif request.method=="POST":
       data=request.form
       print(data)
       if data["pwd"]==data["confirmpwd"]:
         return "college registered successfully"
       else:
           return redirect(url_for("registerCollege"))


"""

if __name__ == "__main__":
    app.run(port=5000,debug=True)
