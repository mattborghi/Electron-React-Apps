$("#tree").fancytree({
  checkbox: false,
  selectMode: 1,

  source: [
    // Typically we would load using ajax instead...
    { title: "Node 1" },
    { title: "Node 2" },
    {
      title: "Folder 3",
      folder: true,
      expanded: true,
      children: [
        { title: "Node 3.1", key: "id3.1" },
        { title: "Node 3.2"}
      ]
    },
    {
      title: "Folder 4",
      folder: true,
      children: [{ title: "Node 4.1" }, { title: "Node 4.2" }]
    }
  ],
  activate: function(event, data) {
    $("#statusLine").text(event.type + ": " + data.node);
  },
  select: function(event, data) {
    $("#statusLine").text(
      event.type + ": " + data.node.isSelected() + " " + data.node
    );
  }
});

// Select a node on click
$("#button1").click(function() {
  var tree = $("#tree").fancytree("getTree"),
    node = tree.getNodeByKey("id3.1");

  node.toggleSelected();
});
