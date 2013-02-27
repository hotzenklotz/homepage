class Main

  constructor : ->

    @addEmail()
    @transitionEvent = @detectTransitionEvent()

    #register events for clicking
    for i in ["a", "b", "c", "d"]
      do (i) =>
        context = @

        $("##{i}").click (event) ->
          context.resizeTiles(this,i)


    @oldSelection = null


  resizeTiles : (tile, index) ->

    { oldSelection, transitionEvent } = this
    $tile = $(tile)

    # shrink the previously selected tile
    if oldSelection?
      oldTile = $("##{oldSelection}")
      oldTile.removeClass("span6")
      oldTile.removeClass("active")
      oldTile.removeClass("transitionend")
      oldTile.addClass("span4")

      # toggle selection if current one
      if oldSelection == index
        @oldSelection = null
        return

    # register events listener
    $tile.on transitionEvent, ->
      $tile.addClass("transitionend")
      $tile.off(transitionEvent)

    # increase width
    $tile.removeClass("span4")
    $tile.addClass("active")
    $tile.addClass("span6")

    @oldSelection = index


  addEmail : ->
    $email = $("#mx")

    emailAddr = "mailto#{String.fromCharCode(58)}heroldtom#{String.fromCharCode(64)}gmail.com"
    $email.attr("href", emailAddr)


  detectTransitionEvent : ->
    # https://github.com/twitter/bootstrap/blob/master/js/bootstrap-transition.js
    el = document.createElement('bootstrap')
    transEndEventNames =
      'WebkitTransition' : 'webkitTransitionEnd'
      'MozTransition'    : 'transitionend'
      'OTransition'      : 'oTransitionEnd otransitionend'
      'transition'       : 'transitionend'

    for name of transEndEventNames
      unless el.style[name] == undefined
        return transEndEventNames[name]

new Main()