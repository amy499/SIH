from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length, Email, EqualTo

class NewStudentRegister(FlaskForm):
    studentName = StringField('studentName', validators=[DataRequired(), Length(max=50)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    university = StringField('University', validators=[DataRequired(), Length(max=50)])
    college = StringField('College', validators=[DataRequired(), Length(max=50)])
    GrNo = StringField('GrNo', validators=[DataRequired()])
    MobileNo = StringField('MobileNo', validators=[DataRequired(), Length(min=10, max=10)])
    submit = SubmitField('Submit')
