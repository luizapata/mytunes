// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "QueueTable",

  initialize: function() {
    this.render();
  },

  render: function(){

    this.$el.html('<th>Queue</th>').append(
      this.$el.on('click', function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
