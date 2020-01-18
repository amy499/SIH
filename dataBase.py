from pymongo import MongoClient
import datetime
from bson.json_util import loads,dumps
client = MongoClient("mongodb://localhost:27017/")
dataBase = client.smartIndiaHackathon


class Complaint:
    def __init__(self):
        self.complaints = dataBase.complaint
    def insertComplaint(self,data):
        self.complaints.insert_one({
        "user":'Rahul',
        'College': 'VIIT',
        "BroadCategory":data['BroadCategory'],
        "SubCategory":data['SubCategory'],
        "TOC":data['TypeOfComplaint'],
        "Subject":data['Subject'],
        "Complaint":data['Complaint'],
        "priority":data['priority'],
        "datetime": datetime.datetime.utcnow()
        })
    def updateComplaint(self,data):
        pass    
    def findComplaint(self,College,Committee):
        cur = self.complaints.find({'College':'VIIT'}).sort("priority")
        jsonString = dumps(cur)
        return jsonString
    def deleteComplaint(self,objectId):
        pass

class Student:
    def __init__(self):
        self.collection = dataBase.student
    def insertStudent(self,data):
        self.collection.insertOne({
        'name':data['name'],
        'college':data['college'],
        'university':data['university'],
        'college':data['college'],
        'email':data['email'],
        'password': data['password'],
        'department': data['department'],
        })

    def findStudent(self,studentId="Rahul",studentEmail="rahul.17u652@viit.ac.in"):
        result = self.collection.find({'emailId':studentEmail})
        for data in  result:
            print(data)
        return result
    def findOne(self,email):
        self.collection.findOne({'email':email})
        return Success
    def find(self,college):
        cur = self.collection.find({'college':college})
        return dumps(cur)

class Committee:
    def __init__(self):
        self.collection=dataBase.administration
    def insertCommitteeMember(self,data):
        self.collection.insertOne({
        'universityName':data.university,
        'collegeName':data.college,
        'email': data.email,
        'committeeName': data.committeeName,
        })
        return "success"
    def findOne(self,email):
        result = self.collection.find({'email':email})
        return result;
    def find(self,collegeName):
        result = self.collection.find({})
