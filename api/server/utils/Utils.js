export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.token=null;
    this.user=null;
    this.auth=false;
  }
  setAuth(statusCode,message,auth,token,user){
    this.message=message;
    this.token=token;
    this.user=user;
    this.statusCode = statusCode;
    this.auth=auth;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  sendAuth(res){
    const result={
      auth:this.auth,
      message:this.message,
      token:this.token,
      user:this.user,
      statusCode:this.statusCode,
    };
    if(this.auth){
      return res.status(this.statusCode).send(result);
    }
    return res.status(this.statusCode).send({
      message:this.message,
    })

  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}
