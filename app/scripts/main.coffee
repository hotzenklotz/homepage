class Main

  constructor : ->

    for i in ["a", "b", "c", "d"]
      do (i) =>
        context = @
        $("##{i}").click (event) ->
          context.resizeTiles(this,i)


    @pullDown()
    @oldSelection = null


  # UI manipulation
  pullDown : ->
    $('.pull-down').each ->
      $(this).css('margin-top', $(this).parent().height() - $(this).height())


  resizeTiles : (tile, index) ->

    { oldSelection } = this
    tile = $(tile)

    #shrink the previously selected tile
    if oldSelection?
      oldTile = $("##{oldSelection}")
      oldTile.removeClass("span6")
      oldTile.addClass("span4")

      #toggle
      if oldSelection == index
        @oldSelection = null
        return

    tile.removeClass("span4")
    tile.addClass("span6")

    @oldSelection = index

new Main()