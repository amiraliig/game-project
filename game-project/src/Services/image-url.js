const getCorppedImageUrl = (url,w,h) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0,index) + `crop/${w}/${h}/` + url.slice(index)
};
export default getCorppedImageUrl;
