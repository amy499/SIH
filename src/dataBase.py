from pymongo import MongoClient
import datetime
from bson.json_util import loads,dumps
from bson.objectid import ObjectId
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
        "datetime": datetime.datetime.utcnow(),
        'status': 'Filed'
        })
    def updateComplaint(self,data):
        pass
    def findComplaint(self,College,Committee,status):
        cur = self.complaints.find({'College':'VIIT','status':status}).sort("priority")
        jsonString = dumps(cur)
        return jsonString
    def deleteComplaint(self,objectId):
        pass
    def updateComplaint(self,objectId):
        data = self.complaints.update({'_id':ObjectId(objectId)},{'$set':{
        'status':'Opened'
        }})
        print(data)
        return "Success"

class Student:
    def __init__(self):
        self.collection = dataBase.student
    def insertStudent(self,data):
        self.collection.insert_one({
        'name':data['studentName'],
        'college':data['collegeName'],
        'university':data['universityName'],
        'email':data['studentEmail'],
        'password': data['pwd'],
        'department': data['Department'],
		'GR no':data['grNo']
        })

    def findStudent(self,studentId="Rahul",studentEmail="rahul.17u652@viit.ac.in"):
        result = self.collection.find({'email':studentEmail})
        if result is None:
            return "ERROR"
        else:
            return dumps(result)
    def findOne(self,email):
        data = self.collection.findOne({'email':email})
        return data
    def find(self,college):
        cur = self.collection.find({'college':college})
        return dumps(cur)

class Committee:
    def __init__(self):
        self.collection=dataBase.administration
    def insertCommitteeMember(self,data):
        self.collection.insert_one({
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