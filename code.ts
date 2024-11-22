// figma.showUI(
//   "<b>Hello from Figma</b>",
//   { width: 400, height: 200, title: "My title" }
// )

// figma.showUI(
//   "<b>Hello from Figma</b>",
//   { width: 400, height: 200, title: "My title", position: { x: 100, y: 100 } }
// )

// figma.showUI(__html__)
figma.showUI(
  __html__,
  {width: 700, height: 400, title:'todo'}
);


figma.ui.onmessage =  (msg: {type: string}) => {
  // figma.ui.postMessage(msg)
  figma.closePlugin();
};
