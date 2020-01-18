from flask import Flask,session,request,render_template,url_for,redirect,flash
from Data import complaint,NewUser
#from stat_plots import commitee_incharge,commitee_member
from validate import Login
app = Flask(__name__)
app.config['SECRET_KEY']='c8f198ab0ecb824b62b369e27357d343'

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
    if request.method=="POST":
        data=request.form


    return "Registered"
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
   if request.method == "GET":
       return render_template("login.html")
   elif request.method == "POST":
       user=request.form
       user=Login(username=user["userName"],password=user["password"])
       return user.validate()

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
    """user=""
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




if __name__ == "__main__":
    app.run(port=5000,debug=True)


