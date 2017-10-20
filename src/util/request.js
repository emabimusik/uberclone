const request = require("superagent");
const defaultAjaxTimeout = 30000;

request.Request.prototype.finish = function(callback){
    // this replace superagent"s end fucntion to include our customer error
    //handling
      this.end((err,res) =>{
        callback(err,res);
    });
};
 var requestWrapper = function(method){
        // this is here so that we can append the .elemnt call to all our ajax requests with the default value

        return function(url){
            return request[method](url)
                .type("form")
                .timeout(defaultAjaxTimeout);
            
        };
    };


export default {
    get:requestWrapper("get"),
    put:requestWrapper("put"),
    post:requestWrapper("post"),
    del:requestWrapper("del"),
};