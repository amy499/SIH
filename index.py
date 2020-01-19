from flask import Flask,sessions,request,render_template,url_for,redirect
from flask_cors import CORS
from dataBase import Complaint,Student
import json

app = Flask(__name__)
CORS(app,resoruces={r"/*":{"origins":"htpp:localhost:3000"}})
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
    return render_template("newStudentRegistration.html")
@app.route("/user",methods=["POST"])
def registerUser():
    user=request.form
    print(user)
    if len(user['mobileNo'])==10:
        if  user["pwd"]==user["confirmpwd"]:
            student=Student()
            student.insertStudent(user)
            return "Registered"
        else:
            return redirect(url_for("getRegistrationForm"))
    else:
        return redirect(url_for("getRegistrationForm"))
#Contains information about reference page



@app.route("/referencepage")
def getReferencePage():
    return "Reference Page"
#Contains information about FAQs

@app.route("/FAQS")
def getFAQs():
    return "FAQs"

@app.route("/about")
def about():
    return "about"

"""
Loggin user
"""

@app.route("/login",methods=["GET","POST"])
def login():
   """if request.method == "GET":
       return render_template("login.html")
   elif request.method == "POST":
       user=request.form
       user=Login(username=user["userName"],password=user["password"])
       return user.validate()"""
   return "login"

@app.route("/committee/new",methods=["GET"])
def newCommittee():
    return "select add department or sub category"


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
        complaint.insertComplaint(data=data)
        return redirect("http://localhost:3000")
@app.route("/complaint/Filed",methods=["GET"])
def complaintFiled():

    if request.method =="GET":
        complaint = Complaint()
        data = complaint.findComplaint(College="VIIT",Committee="XYZ",status="Filed")
        print(data)
        return data
@app.route("/complaint/Opened",methods=["GET"])
def complaintOpened():

    if request.method =="GET":
        complaint = Complaint()
        data = complaint.findComplaint(College="VIIT",Committee="XYZ",status="Opened")
        print(data)
        return data
@app.route("/complaint/new")
def newComplaint():
    return render_template("/Complaints/register.html",target=url_for('complaint'))
@app.route("/complaint/edit",methods=["POST"])
def editComplaint():
        data = (request.get_json())
        complaint =Complaint()
        complaint.updateComplaint(objectId=data['_id']['$oid'])
        return redirect("http://localhost:3000")
@app.route("/complaint",methods=["DELETE"])
def deleteComplaint():
    return "Delete your Complaints here"

"""Statistics Route"""
@app.route("/stats")
def stats():
    return "Show stats here"
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




if __name__ == "__main__":
    app.run(port=5000,debug=True)
