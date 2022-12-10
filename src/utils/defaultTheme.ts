const getDefaultTheme = () => {
  return {
    // 主要颜色
    "--primaryColor": localStorage.getItem("color") || "#ec4141",
    // "--primaryColor": "green",
    // 字体颜色
    "--fontColor": "black",
    // svg 图标字体颜色
    "--svgColor": localStorage.getItem("color"),
    // 图标颜色
    "--iconColor": "#fff",
    // 图标背景颜色
    "--iconBackColor": "black",
    // placeHolder颜色
    "--placeHolderColor": "#ccc",
    "--contentMinHeight": "1000px",
    "--hotSearchDetailMinHeight": "580px",
    "--hotSearchDetailWidth": "350px",
    "--backGrondColor": "white",
    "--contentBackGrondColor": "white",
    "--hoverBGColor": "#f2f2f2",
    "--iconHoverColor": "#e5e5e5",
    "--scrollColor": "#d9d9d9",
    "--titleHoverColor": "#000",
    "--textareaColor": "#fff",
    "--gapColor": "#f2f2f2",
    "--headerBackGrondColor": localStorage.getItem("color"),
    "--replyBGColor": "#f5f5f5",
    "--popBackGrondColor": "white",
  };
};

export default getDefaultTheme;
