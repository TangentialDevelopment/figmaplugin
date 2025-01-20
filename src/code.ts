figma.showUI(
  __html__,
  {width: 700, height: 400, title:'todo'}
);

// figma.ui.onmessage = async (msg) => {
//   if (msg.type === "set-value") {
//     await figma.clientStorage.setAsync(msg.name, msg.value);
//   }
//   else if (msg.type === "get-value") {
//     const value = await figma.clientStorage.getAsync(msg.name);
//     figma.ui.postMessage({type: 'return-value', value: value});
//   }
// };

figma.ui.onmessage =  (msg: {type: string}) => {
  // figma.ui.postMessage(msg)
  figma.closePlugin();
};
