import { DataTypes} from 'sequelize';
import sequelize  from '../Connection/sequelize';

const user =  sequelize.define('users', {
    Userid: {
        type:DataTypes.INTEGER,

        // To increment user_id automatically.
        autoIncrement:true,

        // user_id can not be null.
        allowNull:false,

        // For uniquely identify user.
        primaryKey:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = user;