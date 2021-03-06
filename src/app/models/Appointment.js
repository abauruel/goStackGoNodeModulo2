module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      date: DataTypes.DATE
    },
    {
      tableName: "appointments"
    }
  );

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: "user_id" });
    Appointment.belongsTo(models.User, {
      as: "provider",
      foreignKey: "provider_id"
    });
  };

  return Appointment;
};
