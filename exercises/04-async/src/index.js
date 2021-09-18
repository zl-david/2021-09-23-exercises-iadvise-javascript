const API_PATH = 'http://localhost:8083';

const apiRoutes = {
  poll: () => `${API_PATH}/poll/active`, // GET
  vote: id => `${API_PATH}/poll/${id}/vote`, // POST
  result: id => `${API_PATH}/poll/${id}/result`, // GET
};

/**
 * Helper function to log an image to the console.
 * Example usage: console.image("http://localhost:5000/images/iron-man.jpeg")
 * @param {*} url 
 * @param {*} size 
 */
console.image = function(url, size = 200) {
  var image = new Image();
  image.onload = function() {
    var style = [
      `font-size: ${size}px;`,
      `background: url(${url}) no-repeat;`,
      'background-size: contain;'
     ].join(' ');
     console.log('%c ', style);
  };
  image.src = url;
};


const start = () => {

}