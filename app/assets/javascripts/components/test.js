
var Teacher = React.createClass({
  getInitialState: function(){
  teacherPropmpt: "question kjk;j;kj;lkj"
  studentPrompt: ""
  },

  setStudentPrompt: function(){
    this.state.studentPrompt: getInitialQuestion()
  },

  setTeacherPrompt: function(){
    this.state.teacherPrompt: getInitialQuestion()
  }

  getInitialQuestion: function(){
    this.state.teacherPrompt: //server stuff
  },

  render: function(){
    return (
      < Teacher />
      < Student studentPrompt={this.props.prompt} />
      )
  }
})





var Student = React.createClass({

  getInitialState


  render: function(){
    var prompt = this.props.studentPromp
    return (
      <div className="question_box">
        {this.state.studentPrompt}
      </div>
      )
  }
})