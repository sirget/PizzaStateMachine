var pathColorIn = "#cd071e";
var pathColorOut = "#4caf50";
var textColorIn = "#f19ca6";
var textColorOut = "#b0e0b2";
//var pathColorDefault =

var now = 0;
var oldFrom = -1,
  oldTo = 0,
  toggleOpacity = 0;
nodeDataArray = [
  { key: -1, loc: "-75 28" },

  { key: 0, loc: "0 0", text: "Start\nstate", category: "rStart" },

  { key: 1, loc: "200 -100", text: "ขอบ\nชีส", category: "Start" },
  { key: 2, loc: "200 100", text: "ขอบ\nไส้กรอก", category: "Start" },

  { key: 3, loc: "400 -250", text: "ฮาวายเอียน\nขอบชีส", category: "Start" },
  { key: 4, loc: "400 -150", text: "ซีฟู้ด\nขอบชีส", category: "Start" },
  { key: 5, loc: "400 -50", text: "ดับเบิ้ลชีส\nขอบชีส", category: "Start" },

  { key: 6, loc: "400 50", text: "ฮาวายเอียน\nขอบไส้กรอก", category: "Start" },
  { key: 7, loc: "400 150", text: "ซีฟู้ด\nขอบไส้กรอก", category: "Start" },
  {
    key: 8,
    loc: "400 250",
    text: "ดับเบิ้ลชีส\nขอบไส้กรอก",
    category: "Start",
  },

  {
    key: 9,
    loc: "600 -200",
    text: "ฮาวายเอียน\nขอบชีส\nเพิ่มชีส",
    category: "Start",
  },
  {
    key: 10,
    loc: "600 -100",
    text: "ซีฟู้ด\nขอบชีส\nเพิ่มชีส",
    category: "Start",
  },

  {
    key: 11,
    loc: "600 100",
    text: "ฮาวายเอียน\nขอบไส้กรอก\nเพิ่มชีส",
    category: "Start",
  },
  {
    key: 12,
    loc: "600 200",
    text: "ซีฟู้ด\nขอบไส้กรอก\nเพิ่มชีส",
    category: "Start",
  },

  { key: 13, loc: "800 0", text: "Confirm", category: "End" },

  { key: 14, loc: "1000 0", text: "Trap\nstate", category: "Start" },
];

linkDataArray = [
  {
    from: 0,
    to: 0,
    points: [5, 60, -30, 60, -30, 100, 10, 100, 10, 65],
    segmentIndex: 2,
    segmentFraction: 0.5,
    text: "ฮาวายเอียน,\nซีฟู้ด,ดับเบิ้ลชีส,\nเพิ่มชีส,\nReset,Confirm",
  },
  { from: 0, to: 1, text: "ขอบชีส", segmentIndex: 2, segmentFraction: 0.4 },
  { from: 0, to: 2, text: "ขอบไส้กรอก", segmentIndex: 2, segmentFraction: 0.4 },

  {
    from: 1,
    to: 0,
    points: [240, -100, 240, -150, 60, -150, 60, 10],
    text: "ขอบชีส",
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 1,
    to: 1,
    points: [273, -40, 300, -40, 300, -20, 240, -20],
    text: "เพิ่มชีส\nConfirm",
    segmentIndex: 1,
    segmentFraction: 1,
  },
  {
    from: 1,
    to: 2,
    points: [210, -35, 210, 115],
    text: "ขอบไส้กรอก",
    segmentFraction: 0.3,
  },
  {
    from: 1,
    to: 3,
    points: [280, -60, 340, -60, 340, -210, 400, -210],
    text: "ฮาวายเอียน\n",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 1,
    to: 4,
    points: [280, -60, 340, -60, 340, -110, 400, -110],
    text: "ซีฟู้ด",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 1,
    to: 5,
    points: [280, -60, 340, -60, 340, -10, 400, -10],
    text: "ดับเบิ้ลชีส\n",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },

  {
    from: 2,
    to: 0,
    points: [240, 100, 240, 230, 60, 230, 60, 70],
    text: "ขอบไส้กรอก",
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 2,
    to: 1,
    points: [230, 103, 230, -22],
    text: "ขอบชีส",
    segmentFraction: 0.3,
  },
  {
    from: 2,
    to: 2,
    points: [273, 160, 300, 160, 300, 180, 240, 180],
    text: "เพิ่มชีส\nConfirm",
    segmentIndex: 1,
    segmentFraction: 1,
  },
  {
    from: 2,
    to: 6,
    points: [280, 140, 340, 140, 340, 90, 400, 90],
    text: "ฮาวายเอียน\n",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 2,
    to: 7,
    points: [280, 140, 340, 140, 340, 190, 400, 190],
    text: "ซีฟู้ด\n",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 2,
    to: 8,
    points: [280, 140, 340, 140, 340, 290, 400, 290],
    text: "ดับเบิ้ลชีส\n",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },

  //layer 2 up
  {
    from: 3,
    to: 1,
    text: "ฮาวายเอียน",
    points: [400, -200, 320, -200, 320, -70, 280, -70],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 3,
    to: 3,
    points: [406, -230, 370, -230, 370, -250, 440, -250],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text: "ขอบชีส",
  },
  {
    from: 3,
    to: 4,
    text: "ซีฟู้ด",
    points: [410, -185, 410, -135],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 3,
    to: 5,
    text: "ดับเบิ้ลชีส",
    points: [480, -220, 550, -220, 550, -10, 480, -10],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 3,
    to: 6,
    text: "ขอบไส้กรอก",
    points: [465, -240, 570, -240, 570, 60, 465, 60],
    segmentIndex: 0,
    segmentFraction: 0.45,
  },
  {
    from: 3,
    to: 9,
    text: "เพิ่มชีส",
    points: [475, -190, 608, -180],
    segmentIndex: 0,
    segmentFraction: 0.15,
  },

  {
    from: 4,
    to: 1,
    text: "ซีฟู้ด",
    points: [405, -95, 320, -95, 320, -70, 280, -70],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 4,
    to: 3,
    text: "ฮาวายเอียน",
    points: [470, -135, 470, -185],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 4,
    to: 4,
    points: [406, -130, 370, -130, 370, -150, 440, -150],
    segmentIndex: 1,
    segmentFraction: 1,
    text: "ขอบชีส",
  },
  {
    from: 4,
    to: 5,
    text: "ดับเบิ้ลชีส",
    points: [410, -85, 410, -35],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 4,
    to: 7,
    text: "ขอบไส้กรอก",
    points: [475, -120, 570, -120, 570, 180, 475, 180],
    segmentIndex: 0,
    segmentFraction: 0.25,
  },
  {
    from: 4,
    to: 10,
    text: "เพิ่มชีส",
    points: [475, -90, 608, -80],
    segmentIndex: 0,
    segmentFraction: 0.15,
  },

  {
    from: 5,
    to: 1,
    text: "ดับเบิ้ลชีส",
    points: [400, 0, 320, 0, 320, -70, 280, -70],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 5,
    to: 3,
    text: "ฮาวายเอียน",
    points: [480, -20, 540, -20, 540, -210, 480, -210],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 5,
    to: 4,
    text: "ซีฟู้ด",
    points: [470, -35, 470, -85],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 5,
    to: 5,
    points: [406, -30, 370, -30, 370, -50, 440, -50],
    segmentIndex: 1,
    segmentFraction: 1,
    text: "ขอบชีส,\nปลาร้า",
  },
  {
    from: 5,
    to: 8,
    text: "ขอบไส้กรอก",
    points: [480, 0, 570, 0, 570, 300, 480, 300],
    segmentIndex: 0,
    segmentFraction: 0.25,
  },

  // //layer 2 down
  {
    from: 6,
    to: 2,
    text: "ฮาวายเอียน",
    points: [400, 100, 320, 100, 320, 130, 280, 130],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 6,
    to: 3,
    text: "ขอบชีส",
    points: [475, 70, 570, 70, 570, -230, 475, -230],
    segmentIndex: 0,
    segmentFraction: 0.45,
  },
  {
    from: 6,
    to: 6,
    points: [406, 70, 370, 70, 370, 50, 440, 50],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text: "ขอบไส้กรอก",
  },
  {
    from: 6,
    to: 7,
    text: "ซีฟู้ด",
    points: [410, 115, 410, 165],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 6,
    to: 8,
    text: "ดับเบิ้ลชีส",
    points: [480, 80, 550, 80, 550, 290, 480, 290],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 6,
    to: 11,
    text: "เพิ่มชีส",
    points: [477, 110, 615, 120],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },

  {
    from: 7,
    to: 2,
    text: "ซีฟู้ด",
    points: [400, 200, 320, 200, 320, 130, 280, 130],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 7,
    to: 4,
    text: "ขอบชีส",
    points: [480, 190, 570, 190, 570, -110, 480, -110],
    segmentIndex: 0,
    segmentFraction: 0.25,
  },
  {
    from: 7,
    to: 6,
    text: "ฮาวายเอียน",
    points: [470, 165, 470, 115],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 7,
    to: 7,
    points: [406, 170, 370, 170, 370, 150, 440, 150],
    segmentIndex: 1,
    segmentFraction: 1,
    text: "ขอบไส้กรอก",
  },
  {
    from: 7,
    to: 8,
    text: "ดับเบิ้ลชีส",
    points: [410, 215, 410, 265],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 7,
    to: 12,
    text: "เพิ่มชีส",
    points: [477, 210, 615, 220],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },

  {
    from: 8,
    to: 2,
    text: "ดับเบิ้ลชีส",
    points: [400, 300, 320, 300, 320, 130, 280, 130],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 8,
    to: 5,
    text: "ขอบชีส",
    points: [474, 310, 570, 310, 570, 10, 474, 10],
    segmentIndex: 0,
    segmentFraction: 0.25,
  },
  {
    from: 8,
    to: 6,
    text: "ฮาวายเอียน",
    points: [480, 280, 540, 280, 540, 90, 480, 90],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 8,
    to: 7,
    text: "ซีฟู้ด",
    points: [470, 265, 470, 215],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 8,
    to: 8,
    points: [406, 270, 370, 270, 370, 250, 440, 250],
    segmentIndex: 1,
    segmentFraction: 1,
    text: "ขอบไส้กรอก,\nปลาร้า",
  },

  //layer 3
  {
    from: 9,
    to: 3,
    text: "เพิ่มชีส",
    points: [615, -190, 475, -200],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },
  {
    from: 9,
    to: 9,
    text: "ขอบชีส,\nฮาวายเอียน,\nดับเบิ้ลชีส",
    points: [660, -195, 660, -220, 690, -220, 690, -190, 665, -190],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 9,
    to: 10,
    text: "ซีฟู้ด",
    points: [610, -135, 610, -85],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 9,
    to: 11,
    text: "ขอบไส้กรอก",
    points: [679, -170, 770, -160, 770, 120, 679, 130],
    segmentIndex: 0,
    segmentFraction: 0.7,
  },

  {
    from: 10,
    to: 4,
    text: "เพิ่มชีส",
    points: [615, -90, 475, -100],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },
  {
    from: 10,
    to: 9,
    text: "ฮาวายเอียน",
    points: [670, -85, 670, -135],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 10,
    to: 10,
    text: "ขอบชีส,ซีฟู้ด,\nดับเบิ้ลชีส",
    points: [660, -25, 660, 0, 690, 0, 690, -30, 666, -30],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 10,
    to: 12,
    text: "ขอบไส้กรอก",
    points: [677, -50, 750, -30, 750, 250, 675, 260],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },

  {
    from: 11,
    to: 6,
    text: "เพิ่มชีส",
    points: [615, 110, 477, 100],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },
  {
    from: 11,
    to: 9,
    text: "ขอบชีส",
    points: [680, 140, 760, 130, 760, -150, 680, -160],
    segmentIndex: 0,
    segmentFraction: 0.4,
  },
  {
    from: 11,
    to: 11,
    text: "ขอบไส้กรอก,ฮาวายเอียน,\nดับเบิ้ลชีส",
    points: [660, 105, 660, 80, 690, 80, 690, 110, 665, 110],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 11,
    to: 12,
    text: "ซีฟู้ด",
    points: [610, 165, 610, 215],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },

  {
    from: 12,
    to: 7,
    text: "เพิ่มชีส",
    points: [615, 210, 477, 200],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },
  {
    from: 12,
    to: 10,
    text: "ขอบชีส",
    points: [678, 250, 740, 240, 740, -20, 675, -40],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 12,
    to: 11,
    text: "ฮาวายเอียน",
    points: [670, 215, 670, 165],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 12,
    to: 12,
    text: "ขอบไส้กรอก,\nซีฟู้ด,\nดับเบิ้ลชีส",
    points: [660, 275, 660, 300, 690, 300, 690, 270, 666, 270],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 13,
    to: 14,
    segmentFraction: 0.5,
    segmentIndex: 2,
    text:
      "ขอบชีส,ขอบไส้กรอก,\nฮาวายเอียน,ซีฟู้ด,\nดับเบิ้ลชีส,เพิ่มชีส,\nReset,confirm",
  },

  {
    from: 14,
    to: 14,
    points: [1060, 80, 1060, 120, 1005, 120, 1005, 70],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text:
      "ขอบชีส,ขอบไส้กรอก,\nฮาวายเอียน,ซีฟู้ด,\nดับเบิ้ลชีส,เพิ่มชีส,\nReset,Confirm",
  },

  //Confirm

  {
    from: 3,
    to: 13,
    text: "Confirm",
    points: [465, -180, 560, -170, 560, 40, 800, 40],
    segmentFraction: 0.3,
  },
  {
    from: 4,
    to: 13,
    text: "Confirm",
    points: [465, -80, 560, -70, 560, 40, 800, 40],
    segmentFraction: 0.3,
  },
  {
    from: 5,
    to: 13,
    text: "Confirm",
    points: [460, 20, 500, 40, 800, 40],
    segmentFraction: 0.5,
  },
  {
    from: 6,
    to: 13,
    text: "Confirm",
    points: [460, 55, 500, 40, 800, 40],
    segmentFraction: 0.5,
  },
  {
    from: 7,
    to: 13,
    text: "Confirm",
    points: [460, 155, 560, 150, 560, 40, 800, 40],
    segmentFraction: 0.3,
  },
  {
    from: 8,
    to: 13,
    text: "Confirm",
    points: [465, 260, 560, 250, 560, 40, 800, 40],
    segmentFraction: 0.3,
  },
  {
    from: 9,
    to: 13,
    text: "Confirm",
    points: [675, -140, 840, -120, 840, 0],
    segmentFraction: 0.75,
  },
  {
    from: 10,
    to: 13,
    text: "Confirm",
    points: [680, -60, 840, -20, 840, 0],
    segmentFraction: 0.75,
  },
  {
    from: 11,
    to: 13,
    text: "Confirm",
    points: [675, 120, 840, 100, 840, 80],
    segmentFraction: 0.75,
  },
  {
    from: 12,
    to: 13,
    text: "Confirm",
    points: [675, 220, 840, 200, 840, 80],
    segmentFraction: 0.75,
  },

  //Start -1
  { "from": -1, "to": 0, "text": "" },
];

var $ = go.GraphObject.make; // for conciseness in defining templates

// How to use
// call this function with these parameters
// nodeId : [0,14] id of target node
// ex. highlightNode(2)
// *** only 1 node can highlighted ***
// if want more node to be highlighted, contact previous programmer na ja
function highlightNode(nodeId) {
  var node = myDiagram.findNodeForKey(nodeId++);
  // console.log(node);
  if (node !== null) {
    // make sure the selected node is in the viewport
    myDiagram.scrollToRect(node.actualBounds);
    // move the large yellow node behind the selected node to highlight it
    highlighter.location = new go.Point(
      node.location.x + 40,
      node.location.y + 40
    );
    // console.log(node.location)
    // console.log(highlighter.location)
  }
}

// How to use
// call this function with these parameters
// from : [-1,14] id of "from" node
// to : [-1,14] id of "to" node
// colorPath : value of RGB path's color [value also word ex. "#52ce60",'blue']
// colorText : value of RGB path's textBlock [value also word ex. "#52ce60",'red']
// ex. highlightPath(0,1,'blue','red')
// if want smth more , contact CXZ na ja
function highlightPath(
  from,
  to,
  colorPathf,
  colorTextf,
  colorPatht,
  colorTextt
) {
  for (p of myDiagram.model.linkDataArray) {
    if (p.from == from && p.to == to) {
      // console.log(p);
      myDiagram.model.set(p, "colorPath", colorPathf);
      myDiagram.model.set(p, "colorText", colorTextf);
      myDiagram.model.set(p, "bold", true);
      // break;
    } else if (p.from == to) {
      myDiagram.model.set(p, "colorPath", colorPatht);
      myDiagram.model.set(p, "colorText", colorTextt);
      myDiagram.model.set(p, "bold", true);
    } else {
      myDiagram.model.set(p, "bold", false);
    }
  }
  oldFrom = from;
  oldTo = to;
  if (toggleOpacity == 1) _toggleShowPath();
}

function toggleShowPath() {
  if (toggleOpacity == 1) toggleOpacity = 0;
  else toggleOpacity = 1;
  _toggleShowPath();
}

function _toggleShowPath() {
  for (p of myDiagram.model.linkDataArray) {
    if (p.from == oldFrom && p.to == oldTo) {
      if (toggleOpacity == 1) myDiagram.model.set(p, "opacity", toggleOpacity);
    } else if (p.from == oldTo) {
      if (toggleOpacity == 1) myDiagram.model.set(p, "opacity", toggleOpacity);
    } else {
      myDiagram.model.set(p, "opacity", 1 - toggleOpacity);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
  myDiagram = $(
    go.Diagram,
    "myDiagramDiv", // must name or refer to the DIV HTML element
    {
      // grid: $(go.Panel, "Grid",
      //   { gridCellSize: new go.Size(10, 10) },
      //   $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
      //   $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 })
      // ),
      // "draggingTool.isGridSnapEnabled": true,

      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      InitialAnimationStarting: function (e) {
        var animation = e.subject.defaultAnimation;
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 1000;
        animation.add(e.diagram, "scale", 0.1, 1);
        animation.add(e.diagram, "opacity", 0, 1);
      },

      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      // enable undo & redo
      "undoManager.isEnabled": true,
      positionComputation: function (diagram, pt) {
        return new go.Point(Math.floor(pt.x), Math.floor(pt.y));
      },
      // "ChangedSelection": showLocalOnFullClick
    }
  );

  // define the Node template
  myDiagram.nodeTemplate = $(
    go.Node,
    "Auto",
    {
      // locationSpot: go.Spot.TopCenter,
      isShadowed: true,
      shadowBlur: 1,
      shadowOffset: new go.Point(0, 1),
      shadowColor: "rgba(0, 0, 0, .14)", //color of shadow
    },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    // define the node's outer shape, which will surround the TextBlock
    $(
      go.Shape,
      "RoundedRectangle",
      { parameter1: 20, spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight },
      {
        name: "SHAPE",
        fill: null,
        strokeWidth: 0,
        stroke: null,
        portId: "", // this Shape is the Node's port, not the whole Node
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: "pointer",
      }
    ),
    $(
      go.TextBlock,
      {
        font: "Quicksand, sans-serif",
        margin: 7,
        stroke: "rgba(0, 0, 0, .87)",
      },
      new go.Binding("text").makeTwoWay()
    )
  );

  myDiagram.nodeTemplateMap.add(
    "Start",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "white",
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        // cursor: "pointer",
      }),
      $(
        go.TextBlock,
        "Start",
        {
          font: "bold 10pt Prompt, sans-serif",
          textAlign: "center",
          stroke: "black",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );
  myDiagram.nodeTemplateMap.add(
    "rStart",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "#cd071e",
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        // cursor: "pointer",
      }),
      $(go.Shape, "Circle", {
        fill: null,
        desiredSize: new go.Size(70, 70),
        strokeWidth: 2,
        stroke: "whitesmoke",
      }),
      $(
        go.TextBlock,
        "Start",
        {
          font: "bold 14pt Quicksand, sans-serif",
          textAlign: "center",
          stroke: "white",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  myDiagram.nodeTemplateMap.add(
    "End",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "#4caf50",
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: "pointer",
      }),
      $(go.Shape, "Circle", {
        fill: null,
        desiredSize: new go.Size(70, 70),
        strokeWidth: 2,
        stroke: "whitesmoke",
      }),
      $(
        go.TextBlock,
        "Confirm",
        {
          font: "bold 13pt Quicksand, sans-serif",
          stroke: "whitesmoke",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  myDiagram.linkTemplate = $(
    go.Link, // the whole link panel
    {
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true,
      resegmentable: true,
      layerName: "Background",
    },
    {
      routing: go.Link.AvoidsNodes,
      adjusting: go.Link.End,
      curve: go.Link.JumpOver,
      corner: 5,
      opacity: 1.0,
    },
    new go.Binding("opacity").makeTwoWay(),
    new go.Binding("points").makeTwoWay(),
    $(
      go.Shape, // the link path shape
      { isPanelMain: true, strokeWidth: 1 },
      new go.Binding("stroke", "colorPath", function (progress) {
        return progress;
      }),
      new go.Binding("strokeWidth", "bold", function (progress) {
        return progress == true ? 4 : 0.8;
      })
    ),

    $(
      go.Shape, // the arrowhead
      { toArrow: "Standard", stroke: null },
      new go.Binding("fill", "colorPath", function (progress) {
        return progress;
      }),
      new go.Binding("scale", "bold", function (progress) {
        return progress == true ? 2 : 1;
      })
    ),
    $(
      go.TextBlock,
      "transition", // the label text
      {
        textAlign: "center",
        font: "bold 9.9pt Prompt, arial, sans-serif",
        // font: "15pt helvetica, arial, sans-serif",
        margin: 4,
        segmentIndex: 0,
        segmentFraction: 0.2,
        //background: 'white',
      },
      new go.Binding("text").makeTwoWay(),
      new go.Binding("segmentIndex").makeTwoWay(),
      new go.Binding("segmentFraction").makeTwoWay(),
      new go.Binding("stroke", "colorText", function (progress) {
        return progress;
      })
    )
  );

  // Create a part in the background of the full diagram to highlight the selected node
  highlighter = $(
    go.Part,
    "Auto",
    {
      layerName: "Background",
      selectable: false,
      isInDocumentBounds: false,
      locationSpot: go.Spot.Center,
    },
    $(go.Shape, "Ellipse", {
      fill: $(go.Brush, "Radial", { 0.5: "#ffff66" }),
      stroke: null,
      desiredSize: new go.Size(90, 90),
    })
  );
  myDiagram.add(highlighter);

  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  // myDiagram.model.isReadOnly = true;
  myDiagram.isReadOnly = true;

  highlightNode(machine.current_State.key);

  resetPathColor();
  highlightPath(
    machine.current_State.key,
    next.key,
    pathColorIn,
    textColorIn,
    pathColorOut,
    textColorOut
  );
}

function restart() {
  document.getElementById("inputstring").innerHTML = "";
  document.getElementById("name").innerHTML = "เลือกพิซซ่าที่คุณต้องการ";
  // document.getElementById('imgout').src =  'image/' + imgmap['Start_state'] + '.png'
  machine.current_State = { name: "Start_state", key: 0 };
  machine.prev_State = { name: "none", key: -1 };
  highlightNode(machine.current_State.key);
  for (let i = 0; i < bottonList.length; i++) {
    document.getElementById(bottonList[i]).checked = false;
  }
  resetPathColor();
  highlightPath(-1, 0, pathColorIn, textColorIn, pathColorOut, textColorOut);
  Botton.state = {
    ขอบชีส: false,
    ขอบไส้กรอก: false,
    ฮาวายเอียน: false,
    ซีฟู้ด: false,
    ดับเบิ้ลชีส: false,
    เพิ่มชีส: false,
    Confirm: false,
    Reset: false,
  };
  console.log("Current : " + machine.current_State.name);
}

function handleClick(input) {
  document.getElementById("inputstring").innerHTML += " " + input;
  // botton something

  // เลือกหน้า(flavor) เลือกได้แค่หน้าเดียว
  // let indx = flavor.indexOf(input)

  // if (indx >= 0) {
  //   if (Botton.state[input]) {
  //     document.getElementById(Botton.map[input]).checked = false
  //     Botton.state[flavor[indx]] = false
  //   }
  //   else {
  //     Botton.state[flavor[indx]] = true
  //   }
  //   for (let i = 0; i < flavor.length; i++) {
  //     if (i != indx) {
  //       Botton.state[flavor[i]] = false
  //     }
  //   }
  // }

  machine.input_String.push(input);

  // clear highlight path
  highlightPath(
    machine.prev_State.key,
    machine.current_State.key,
    "#9C9C9C",
    "#828282",
    "#9C9C9C",
    "#828282"
  );

  // set prev state
  machine.prev_State = machine.current_State;

  // get next state
  let next = machine.getNext(input);

  // highlight path from current state to next state
  highlightPath(
    machine.current_State.key,
    next.key,
    pathColorIn,
    textColorIn,
    pathColorOut,
    textColorOut
  );

  // highlight next state
  highlightNode(next.key);

  // --------------------Clear radio btn-----------------------
  if (clearList1.indexOf(next.name) >= 0) {
    document.getElementById("EX_cheese").checked = false;
    Botton.state["เพิ่มชีส"] = false;
  }
  if (clearList2.indexOf(next.name) >= 0) {
    for (let i = 0; i < flavor.length; i++) {
      document.getElementById(Botton.map[flavor[i]]).checked = false;
      Botton.state[flavor[i]] = false;
    }
  }

  if (next.name == "Start_state") {
    document.getElementById("ED_cheese").checked = false;
    Botton.state["ขอบชีส"] = false;
    document.getElementById("ED_hotdog").checked = false;
    Botton.state["ขอบไส้กรอก"] = false;
  }

  // set current state = next state
  machine.setCurrentState(next);

  // --------------------- Manage SUM img and name -------------------------------
  if (["Confirm", "Trap_state"].indexOf(machine.current_State.name) < 0) {
    document.getElementById("name").innerHTML =
      "Pizza : " + machine.current_State.name.split("_").join("");

    //document.getElementById('imgout').src =  'image/' + imgmap[machine.current_State.name] + '.png'
  }
  if (machine.current_State.name == "Start_state") {
    document.getElementById("name").innerHTML = "Pizza Rai Dee";
    //document.getElementById('imgout').src =  'image/' + imgmap['Start_state'] + '.png'
  }

  console.log("Current : " + machine.current_State.name);
  // -------- can't ExtraCheese on Double cheese ----------------------
  if (machine.current_State.key >= 9 && input == "ดับเบิ้ลชีส") {
    console.log("Can't Extra Cheese on Double cheese !!!");
    document.getElementById("FL_doublecheese").checked = false;
    Botton.state["ดับเบิ้ลชีส"] = false;
    if (machine.current_State.name.indexOf("ฮาวายเอียน") >= 0) {
      document.getElementById("FL_hawaii").checked = true;
      Botton.state["ฮาวายเอียน"] = true;
    } else if (machine.current_State.name.indexOf("ซีฟู้ด") >= 0) {
      document.getElementById("FL_seafood").checked = true;
      Botton.state["ซีฟู้ด"] = true;
    }
  }

  if (
    input == "Confirm" &&
    document.getElementById("name").innerHTML != "เลือกพิซซ่าที่คุณต้องการ" &&
    machine.current_State.name == "Confirm"
  ) {
    let timerInterval;
    Swal.fire({
      title: document.getElementById("name").innerHTML + "\n✔️",
      // imageUrl: "", //insert PIC
      // imageWidth: 160,
      // imageHeight: 130,
      // imageAlt: "Your Pizza image",
      // // timerProgressBar: true,
      // // timer: 3000,
      // // onBeforeOpen: () => {
      // //   Swal.showLoading();
      // //   timerInterval = setInterval(() => {
      // //     const content = Swal.getContent();
      // //     if (content) {
      // //       const b = content.querySelector("b");
      // //       if (b) {
      // //         b.textContent = Swal.getTimerLeft();
      // //       }
      // //     }
      // //   }, 100);
      // // },
      // // onClose: () => {
      // //   clearInterval(timerInterval);
      // // },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("Swal was closed by the timer");
      }
    });
  }
}

function resetPathColor() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      // highlightPath(i,j,'#666666','#666666')
      highlightPath(i, j, "#9C9C9C", "#9C9C9C", "#9C9C9C", "#9C9C9C");
      highlightPath(-1, -1, "#f30a49", "#f30a49", "#f30a49", "#f30a49");
    }
  }
}

let Botton = {
  map: {
    ขอบชีส: "ED_cheese",
    ขอบไส้กรอก: "ED_hotdog",
    ฮาวายเอียน: "FL_hawaii",
    ซีฟู้ด: "FL_seafood",
    ดับเบิ้ลชีส: "FL_doublecheese",
    เพิ่มชีส: "EX_cheese",
    Confirm: "Confirm",
    Reset: "Reset",
  },
  state: {
    ขอบชีส: false,
    ขอบไส้กรอก: false,
    ฮาวายเอียน: false,
    ซีฟู้ด: false,
    ดับเบิ้ลชีส: false,
    เพิ่มชีส: false,
    Confirm: false,
    Reset: false,
  },
};

let flavor = ["ฮาวายเอียน", "ซีฟู้ด", "ดับเบิ้ลชีส"];
let edge = ["ฮาวายเอียน", "ซีฟู้ด", "ดับเบิ้ลชีส"];
let clearList1 = [
  "Start_state",
  "ขอบชีส",
  "ขอบไส้กรอก",
  "ฮาวายเอียน_ขอบชีส",
  "ซีฟู้ด_ขอบชีส",
  "ดับเบิ้ลชีส_ขอบชีส",
  "ฮาวายเอียน_ขอบไส้กรอก",
  "ซีฟู้ด_ขอบไส้กรอก",
  "ดับเบิ้ลชีส_ขอบไส้กรอก",
]; // listForClearActiveBotton

let clearList2 = ["Start_state", "ขอบชีส", "ขอบไส้กรอก"]; // same

let bottonList = [
  "ED_cheese",
  "ED_hotdog",
  "FL_hawaii",
  "FL_seafood",
  "FL_doublecheese",
  "EX_cheese",
];
