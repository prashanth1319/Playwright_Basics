const { LoginPage } = require('../pageObjects/LoginPage');
const {LoginBlaze} = require('../pageObjects/LoginBlaze');
const { LoginPaypenny } = require('../pageObjects/login');

class POM_manager 
{

  constructor(page) 
  {
    this.page = page;
    this.login = new LoginPage(this.page);
    this.loginBlaze= new LoginBlaze(this.page);
    this.login = new LoginPaypenny(this.page);
  }
getHomePage() 
{
    return this.login;
  }

loginblazee()
{
  return this.loginBlaze;
}
loginPage() 
{
    return this.LoginPaypenny;
  }

}
module.exports={POM_manager};





