from pymongo import MongoClient
import datetime
from bson.json_util import loads,dumps
from bson.objectid import ObjectId
client = MongoClient("mongodb://localhost:27017/")
dataBase = client.smartIndiaHackathon


class Complaint:
    def __init__(self):
        self.complaints = dataBase.complaint
        self.configuration = dataBase.configuration
    def configure(self,collegeName):
        cur = self.configuration.find({'collegeName':'VIIT'})
        cur = dumps(cur)
        return cur
    def editConfigure(self,conf,collegeName="XYZ"):
        if conf is None:
            self.configuration.insert_one({
            'collegeName':'VIIT',
            'subCategory':['Ladies Grievance Cell','Miscellaneos Cell'],
            'broadCategory':['University','College','Department']
        })
        else:
            self.configure.insert_one({
            'collegeName':conf['collegeName'],
            'subCategory':conf['subCategory'],
            'broadCategory':conf['broadCategory']
            })
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
    def findComplaint(self,College,status):
        cur = self.complaints.find({'College':'VIIT','status':status}).sort("priority")
        jsonString = dumps(cur)
        return jsonString
    def deleteComplaint(self,objectId):
        pass
    def updateComplaint(self,objectId,objectStatus):
        data = self.complaints.update({'_id':ObjectId(objectId)},{'$set':{
        'status': objectStatus
        }})
        print(data)
        return "Success"
