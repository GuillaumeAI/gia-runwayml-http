class GIARunwayHTTP {
  constructor(_hostName = "localhost",var _port=8000) {
	  this.port = _port;
	  this.hostName = _hostName;
  }
  let port ;
  let hostName ;

  static getImageData(img) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");
    canvas = null;
    return dataURL;
  }

  static async query(hostname = "localhost",port = 8000, data) {

    const url = `http://${hostname}:${port}/query`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getData(hostname= "localhost",port = 8000) {

    const url = `http://${hostname}:${port}/data`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getInfo(hostname= "localhost",port = 8000) {

    const url = `http://${hostname}:${port}/info`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getError(hostname= "localhost",port = 8000) {

    const url = `http://${hostname}:${port}/error`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

}

module.exports = GIARunwayHTTP;
