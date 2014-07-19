game.MainDoor = me.ObjectEntity.extend({
    
    init: function(x, y, settings){
        
        this.parent(x, y, settings);
        this.type = me.game.ACTION_OBJECT;
    
    }

});


