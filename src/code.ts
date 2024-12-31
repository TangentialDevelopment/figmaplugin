figma.showUI(
  __html__,
  {width: 700, height: 400, title:'todo'}
);


figma.ui.onmessage =  (msg: {type: string}) => {
  // figma.ui.postMessage(msg)
  figma.closePlugin();
};
