import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database{
    constructor(){
        this.init();
    }

    init(){
        // Aqui fica a conexão do banco de dados com o model 
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();