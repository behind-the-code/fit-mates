import tutor from "../models/Tutor";

export const home = async (req, res) => {
  try {
    const tutors = await tutor.find({});

    res.render("home", { pageTitle: "Home", tutors, user: req.user });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", tutors: [], user: [] });
  }
};
