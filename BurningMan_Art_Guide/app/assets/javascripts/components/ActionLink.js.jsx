ActionLink = React.createClass({
  onClick: function(event){
    if (this.props.onClick) this.props.onClick(event);
    if (event.isDefaultPrevented()) return;
    event.preventDefault();
    history.pushState({}, '', this.props.href);
    $(window).trigger('pushstate');
  },

  render: function(){
    var props = $.extend({}, this.props);
    if (!props.href){ props.href = ""; }
    props.onClick = this.onClick;
    return React.createElement('a', props)
  }
})
