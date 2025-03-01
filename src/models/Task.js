const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.TEXT,
                status: {
                    type: DataTypes.ENUM('Pendente', 'Em Andamento', 'Concluído'),
                    defaultValue: 'Pendente',
                },
                priority: {
                    type: DataTypes.INTEGER,
                    defaultValue: 1,
                },
            },
            {
                sequelize,
                tableName: 'tasks',
                timestamps: true,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Task;
