const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                }
            },
            {
                sequelize,
                tableName: 'users',
                timestamps: true,
            }
        );
    }
    static associate(models) {
        this.hasMany(models.Task, { foreignKey: 'user_id', as: 'tasks' });
    }
}

module.exports = User;
