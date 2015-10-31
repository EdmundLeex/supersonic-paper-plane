(function(root) {
  if (typeof root.Asteroids === 'undefined') {
    root.Asteroids = {};
  }

  var Asteroids = root.Asteroids;

  var GameBackground = Asteroids.GameBackground = function (height, width) {
  	this.height = height;
  	this.width = width;
  };

  GameBackground.prototype.draw = function (ctx, timer) {
  	ctx.clearRect(0,0,this.width, this.height);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.rect(0,0,this.width, this.height);
  	timer.draw(ctx);
  };

})(this);