import sequelize  from '../Connection/sequelize';
import { model } from './index'

sequelize.sync({ force: false }).then(res => {
    console.log('Yes Sync');
}).catch(err => {
    console.log(err);
})

export default sequelize;

