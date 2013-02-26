(function() {
  var Main;

  Main = (function() {

    function Main() {
      var i, _fn, _i, _len, _ref,
        _this = this;
      _ref = ["a", "b", "c", "d"];
      _fn = function(i) {
        var context;
        context = _this;
        return $("#" + i).click(function(event) {
          return context.resizeTiles(this, i);
        });
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        _fn(i);
      }
      this.pullDown();
      this.oldSelection = null;
    }

    Main.prototype.pullDown = function() {
      return $('.pull-down').each(function() {
        return $(this).css('margin-top', $(this).parent().height() - $(this).height());
      });
    };

    Main.prototype.resizeTiles = function(tile, index) {
      var oldSelection, oldTile;
      oldSelection = this.oldSelection;
      tile = $(tile);
      if (oldSelection != null) {
        oldTile = $("#" + oldSelection);
        oldTile.removeClass("span6");
        oldTile.removeClass("active");
        oldTile.addClass("span4");
        if (oldSelection === index) {
          this.oldSelection = null;
          return;
        }
      }
      tile.removeClass("span4");
      tile.addClass("span6");
      tile.addClass("active");
      return this.oldSelection = index;
    };

    return Main;

  })();

  new Main();

}).call(this);
