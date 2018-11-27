const { User, Appointment } = require("../models");

class DashboardController {
  async index(req, res) {
    const { provider, id } = req.session.user;
    if (!provider) {
      const providers = await User.findAll({ where: { provider: true } });
      return res.render("dashboard", { providers });
    }

    const appointments = await Appointment.findAll({
      include: [{ model: User }],
      where: { provider_id: id }
    }).then(users => {
      return users;
    });
    console.log(appointments);
    return res.render("dashboardProvider", { appointments });
  }
}
module.exports = new DashboardController();
