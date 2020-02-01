from flask import Flask,sessions,request,render_template,url_for,redirect
from flask_cors import CORS
from dataBase import Complaint
import json

app = Flask(__name__)
CORS(app,resoruces={r"/*":{"origins":"htpp:localhost:3000"}})
app.config['SECRET_KEY']='c8f198ab0ecb824b62b369e27357d343'
@app.route("/complaint/configure",methods=["GET","POST"])
def configuration():
    if request.method == "GET":
        complaint =  Complaint()
        data = complaint.configure(collegeName='VIIT')
        if data is None:
            return "NO prior configuration found"
        return data
    elif request.method == "POST":
        conf = request.values
        complaint = Complaint()
        complaint.editConfigure(conf=None)
        return "Storing Configuration"
@app.route("/complaint",methods=["GET","POST"])
def complaint():
    if request.method =="GET":
        complaint = Complaint()
        data = complaint.findComplaint(College="VIIT")
        return data
    elif request.method == "POST":
        data = request.form
        complaint = Complaint()
        complaint.insertComplaint(data=data)
        return redirect("http://localhost:3000")

@app.route("/complaint/<path>",methods=["GET"])
def complaintFiled(path):
        print(path)
        complaint = Complaint()
        data =complaint.findComplaint(College="VIIT",status=path)
        if data == "[]":
            return "Error No data found"
        return data

@app.route("/complaint/new")
def newComplaint():
    return render_template("/Complaints/register.html",target=url_for('complaint'))

@app.route("/complaint/edit",methods=["POST"])
def editComplaint():
        data = (request.get_json())
        print(data)
        complaint =Complaint()
        complaint.updateComplaint(objectId=data['_id']['$oid'],objectStatus=data['status'])
        return redirect("http://localhost:3000")

@app.route("/complaint",methods=["DELETE"])
def deleteComplaint():
    return "Delete your Complaints here"

if __name__ == "__main__":
    app.run(port=5000,debug=True)
