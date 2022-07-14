module.exports = (sequelize, Sequelize) => {
  const Device_Data = sequelize.define("device_data", {
    // id: {
    //   type: Sequelize.STRING
    // },
    address: {
      type: Sequelize.STRING
    },
    heart_rate: {
      type: Sequelize.INTEGER
    },
    timestamp: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at : {
      type: Sequelize.DATE
    }
  });

  return Device_Data;
};
