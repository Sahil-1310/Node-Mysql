import { Sequelize } from 'sequelize';
import mysql from 'mysql';

class Connection {
    static async Connect() {
        try {
            const sequalize = new Sequelize(process.env.database, process.env.user, process.env.password, {
                dialect: process.env.dialect,
                host: process.env.host
            })
            await sequalize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }

    static connect2() {
        var con = mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            insecureAuth: true
        });

        con.connect(function (err) {
            if (err) console.log(err);
            else
                console.log("Connected!");
        });
    }
}

export default Connection;