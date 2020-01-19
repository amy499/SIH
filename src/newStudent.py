#Attempted login 
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length, Email, EqualTo

class NewStudentRegister(FlaskForm):
    studentName = StringField('studentName', validators=[DataRequired(), Length(max=50)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8)])
    confirmPassword = PasswordField('ConfirmPassword', validators=[DataRequired(), EqualTo('password')])
    email = StringField('Email', validators=[DataRequired(), Email()])
    university = StringField('University', validators=[DataRequired(), Length(max=50)])
    college = StringField('College', validators=[DataRequired(), Length(max=50)])
    grNo = StringField('GrNo', validators=[DataRequired()])
    mobileNo = StringField('MobileNo', validators=[DataRequired(), Length(min=10, max=10)])
    submit = SubmitField('Submit')
