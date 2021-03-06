const { Sequelize } = require('sequelize');
//const shell = require('shelljs');
const sql = require('./config/database');

class database{
    constructor(){
        try{
          this.sequelize = new Sequelize(sql.database, sql.username, sql.password, {
            host: sql.host,
            dialect: sql.dialect,
            logging: false,
            storage: './database/database.sqlite'
          });
          this.test();
        }catch(err){
          /*var msg = err.message.split(" ");
          if(msg[0]=="Please" && msg[1]=="install"){
            console.log("Instalando a biblioteca "+msg[2]+" para acessar o banco de dados");
            shell.exec("npm install "+msg[2]);
            process.exit();
          }else{*/
            //console.log(err.message);
            throw err.message;
            //process.exit();
          //}      
        }
    }
    async test(){
        try {
            await this.sequelize.authenticate();
            console.log('Conectado ao banco de dados com sucesso.');
          } catch (error) {
            console.log('Falha ao conectar com o banco de dados:', error.message);
            process.exit()
          }
    }
}
  module.exports = new database();