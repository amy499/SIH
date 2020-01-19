import matplotlib.pyplot as plt
import numpy as np

#Stats for a committee member to see
class commitee_member():
    def __init__(self,name):
        self.name=name

    def complaint_remaining_bar(self,data):
        x=[str(i) for i in range(1,5)]
        plt.bar(x,data,width=0.5,align="center",alpha=1,color='r')
        plt.xlabel("priority level")
        plt.ylabel("Complaints remaining")
        plt.title("Cases pending according to prioity")
        plt.show()
    def complaint_solved_bar(self,data):
        x = [str(i) for i in range(1, 5)]
        plt.bar(x, data, width=0.5, align="center", alpha=1, color='g')
        plt.xlabel("priority level")
        plt.ylabel("Complaints solved")
        plt.title("Cases solved according to prioity")
        plt.show()
    def pie_chart_solved(self,name,commitee_data):
        explode=[]
        for i in range(len(name)):
            if self.name is  name[i]:
                explode.append(0.1)
            else:
                explode.append(0.0)

        fig,ax1=plt.subplots()
        ax1.pie(commitee_data,explode=explode,labels=name,shadow=True,startangle=0,autopct='%1.1f%%')
        ax1.axis("equal")
        plt.show()

    def unopened_complaint_bar(self,data):
        x = [str(i) for i in range(1, 5)]
        plt.bar(x, data, width=0.5, align="center", alpha=1, color='b')
        plt.xlabel("priority level")
        plt.ylabel("Complaints unopened")
        plt.title("Cases unopened according to prioity")
        plt.show()
#Stats for committee incharges
class commitee_incharge():
    def complaint_solved_bar(self,data,names):
        plt.bar(names, data, width=0.5, align="center", alpha=1, color='g')
        plt.xlabel("Member names")
        plt.ylabel("Complaints solved")
        plt.title("Cases solved by each member")
        plt.show()

    def unopened_complaint_bar(self, data,names):
        plt.bar(names, data, width=0.5, align="center", alpha=1, color='b')
        plt.xlabel("Member names")
        plt.ylabel("Complaints unopened")
        plt.title("Cases unopened by each member")
        plt.show()

    def complaint_remaining_bar(self,data,names):
        plt.bar(names,data,width=0.5,align="center",alpha=1,color='r')
        plt.xlabel("Member names")
        plt.ylabel("Complaints remaining")
        plt.title("Cases pending by each member")
        plt.show()

    def complaint_refiled_bar(self,data_refiled,names):
        plt.bar(names, data_refiled, width=0.5, align="center", alpha=1, color='r')
        plt.xlabel("Member")
        plt.ylabel("No of Complaints ")
        plt.title("No of Complaints refiled to the committee previously solved by each member")
        plt.show()

    def complaints_filed_solved_by_month(self,from_,to,data_filed,data_solved):
        months=["January","February","March","April","May","June","July","August","September","October","November","December"]
        months_taken=[]
        for i in range(months.index(from_),months.index(to)+1):
            months_taken.append(months[i])
        x = plt.bar(months_taken, data_solved, color='b', width=0.5, alpha=0.5)
        plt.ylabel("No of Complaints Solved ")
        plt.twinx()
        y, = plt.plot(months_taken, data_filed, color='r', marker='o')
        plt.xlabel("Months")
        plt.ylabel("No of Complaints Filed ")
        plt.title("Complaints filed on an monthly basis ")
        plt.legend([x, y], ["Solved", "Filed"], loc="upper left")

        plt.show()

    def complaints_filed_solved_by_year(self,from_,to,data_filed,data_solved):
        years=[str(i) for i in range(from_,to+1)]
        x=plt.bar(years, data_solved, color='b', width=0.5,alpha=0.5)
        plt.ylabel("No of Complaints Solved ")
        plt.twinx()
        y,=plt.plot(years, data_filed, color='r',marker='o')
        plt.xlabel("Years")
        plt.ylabel("No of Complaints Filed ")
        plt.title("Complaints filed on an annual basis ")
        plt.legend([x,y], ["Solved","Filed"], loc="upper left")
        plt.show()

    def complaints_assigned_priority_wise(self,names,data):
        fig, ax = plt.subplots( subplot_kw=dict(aspect="equal"))

        size = 0.3
        inner_labels=[str(i) for i in range(1,5)]


        cmap = plt.get_cmap("tab20c")

        wedges,texts=ax.pie(data.sum(axis=1), radius=1, wedgeprops=dict(width=size, edgecolor='w'))
        bbox_props=dict(boxstyle="square,pad=0.3",fc="w",ec="k",lw=0.72)
        kw=dict(arrowprops=dict(arrowstyle="-"),bbox=bbox_props,zorder=0,va="center")

        for i,p in enumerate(wedges):
            ang=(p.theta2-p.theta1)/2. + p.theta1
            y=np.sin(np.deg2rad(ang))
            x=np.cos(np.deg2rad(ang))
            horizontalalignment={-1:"right",1:"left"}[int(np.sign(x))]
            connectionstyle="angle,angleA=0,angleB={}".format(ang)
            kw["arrowprops"].update({"connectionstyle":connectionstyle})
            ax.annotate(names[i],xy=(x,y),xytext=(1.35*np.sign(x),1.4*y),horizontalalignment=horizontalalignment,**kw)
        ax.pie(data.flatten(), radius=1 - size,wedgeprops=dict(width=size, edgecolor='w'),labels=inner_labels*4,autopct='%1.f%%')

        ax.set(aspect="equal", title=None)
        plt.show()


fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))



g=commitee_incharge()
data=np.array([[2,4,3,5],[1,4,2,6],[1,7,3,5],[11,3,4,9]])
names=["abhishek","rahul","asmita","Amruta"]
g.complaints_filed_solved_by_year(from_=2019,to=2024,data_filed=[2,7,4,6,1,9],data_solved=[2,8,5,1,5,1])








