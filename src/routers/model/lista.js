import Sequelize from 'sequelize'
import {connection} from '../database/connection.js'

export const tarefas = connection.define('tarefas', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tarefa:{
        type: Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTableName: true,
    createAt: false,
    updateAt: false,
    timestamps: false
})