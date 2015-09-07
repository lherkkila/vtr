Template.itemVtr.helpers({
  dzName: function(dz) {
    return Dropzones.findOne(dz).name;
  },
  creator: function() {
    if (this.createdBy===Meteor.userId()) {
      return true;
    }
    else { return false; }
  },
  wingLoad: function(canopySize){
    exitWeightLbs = this.exitWeight*2.20462;
    return (exitWeightLbs/canopySize).toFixed(2);
  },
  prettyDate: function(date) {
    // why? for the reason that we want to remove time from displaying date
    moment.lang('fi', {
        'calendar' : {
          sameDay : '[Tänään]',
          lastDay : '[Eilen]',
          lastWeek : '[Viime] dddd',
          sameElse : 'L'
       }
    });
    return moment(date).calendar();
  },
});