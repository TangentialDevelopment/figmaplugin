figma.showUI(__html__);


figma.ui.onmessage =  (msg: {type: string}) => {
  figma.ui.postMessage(msg)
  figma.closePlugin();
};
