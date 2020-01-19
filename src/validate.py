#validation classes
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

class register_college():
    def __init__(self,college_name=None,college_domain=None,college_id=None):
        self.college_name=college_name
        self.college_domain=college_domain
        self.college_id=college_id

    def validate(self):
        x=[]
        if self.college_name == "":
            x.append("Please enter College name")
        if self.college_domain == "":
            x.append("Please enter college domain")
        if self.college_id == "":
            x.append("Please enter college id")
        else:
            return "validated"
        return x
