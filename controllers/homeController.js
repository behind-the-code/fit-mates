import routes from "../routes";
import tutor from "../models/Tutor";

export const home = async (req, res) => {
  try {
    const tutors = await tutor.find({});
    console.log(tutors);
    res.render("home", { pageTitle: "Home", tutors });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", tutors: [] });
  }
};
