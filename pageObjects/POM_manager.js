const { LoginPage } = require('../pageObjects/LoginPage');
const {LoginBlaze} = require('../pageObjects/LoginBlaze');

class POM_manager 
{

  constructor(page) 
  {
    this.page = page;
    this.login = new LoginPage(this.page);
    this.loginBlaze= new LoginBlaze(this.page);
  }
getHomePage() 
{
    return this.LoginPage;
  }

loginblaze()
{
  return this.loginBlaze;
}

}
module.exports={POM_manager};





