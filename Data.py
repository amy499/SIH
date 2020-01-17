
class complaint():
    def __init__(self,broad_category=None,sub_category=None,Subject=None,description=None,Priority=None):
        self.broad_category=broad_category
        self.sub_category=sub_category
        self.Subject=Subject
        self.description=description
        self.Priority=Priority


    def validate(self):
        x=[]
        if self.broad_category == "":
           x.append("Please enter broad category")
        if self.sub_category == "":
           x.append("Please enter sub category")
        if self.Subject == "":
           x.append("Please write subject of your complaint")
        if self.description == "":
           x.append("Please write description of your complaint")
        if self.Priority == "":
           x.append("Please assign a priority of your complaint")
        else:
           return "validated"
        return x

"""class login_():
    def __init__(self,username,password):
        self.username=username
        self.password=password

    def validate(self,login_details):
        x=[]
        if   (self.username == "") or (self.password == ""):
            if (self.username == ""):
              x.append("Please enter username")
            if   (self.password == ""):
              x.append("Please enter password")
        if not(self.username in login_details["username"]):
            x.append("Username not registered")
            return x
        if not(self.password in login_details["password"]):
               # print(type(self.password),type(login_details["password"]))
                x.append("Password is incorrect")
        else:
            x.append("Logged in successfully")
        return x
"""


