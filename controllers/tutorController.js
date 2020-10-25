import routes from "../routes";
import Tutor from "../models/Tutor";

export const tutorDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const tutor = await Tutor.findById(id);
    console.log(tutor.name)
    res.render("tutorDetail", { pageTitle: "Tutor Detail", tutor });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
