ActionLink = React.createClass({
  onClick: function(event){
    if (this.props.onClick){
      try{
        this.props.onClick(event);
      }catch(error){
        event.preventDefault();
        throw error;
      }
    }
    if (event.isDefaultPrevented()) return;
    event.preventDefault();
    App.goto(this.props.href);
  },

  render: function(){
    var props = $.extend({}, this.props);
    if (!props.href){ props.href = ""; }
    props.onClick = this.onClick;
    return React.createElement('a', props)
  }
})
