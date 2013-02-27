(function() {
  var Main;

  Main = (function() {

    function Main() {
      var i, _fn, _i, _len, _ref,
        _this = this;
      this.addEmail();
      this.transitionEvent = this.detectTransitionEvent();
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
      this.oldSelection = null;
    }

    Main.prototype.resizeTiles = function(tile, index) {
      var $tile, oldSelection, oldTile, transitionEvent;
      oldSelection = this.oldSelection, transitionEvent = this.transitionEvent;
      $tile = $(tile);
      if (oldSelection != null) {
        oldTile = $("#" + oldSelection);
        oldTile.removeClass("span6");
        oldTile.removeClass("active");
        oldTile.removeClass("transitionend");
        oldTile.addClass("span4");
        if (oldSelection === index) {
          this.oldSelection = null;
          return;
        }
      }
      $tile.on(transitionEvent, function() {
        $tile.addClass("transitionend");
        return $tile.off(transitionEvent);
      });
      $tile.removeClass("span4");
      $tile.addClass("active");
      $tile.addClass("span6");
      return this.oldSelection = index;
    };

    Main.prototype.addEmail = function() {
      var $email, emailAddr;
      $email = $("#mx");
      emailAddr = "mailto" + (String.fromCharCode(58)) + "heroldtom" + (String.fromCharCode(64)) + "gmail.com";
      return $email.attr("href", emailAddr);
    };

    Main.prototype.detectTransitionEvent = function() {
      var el, name, transEndEventNames;
      el = document.createElement('bootstrap');
      transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd otransitionend',
        'transition': 'transitionend'
      };
      for (name in transEndEventNames) {
        if (el.style[name] !== void 0) {
          return transEndEventNames[name];
        }
      }
    };

    return Main;

  })();

  new Main();

}).call(this);
