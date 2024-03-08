const course = require("../data/data");

function getCourse(req, res) {
  return course;
}

function getIndividualCourse(req, res) {
  const index = +req.params.courseid;
  return course[index];
}

function postCourse(req, res) {
  const newCourse = {
    course_name: req.body.course_name,
    subjects: req.body.subjects,
    courseid: `CD${course.length}`,
  };
  course.push(newCourse);
  return newCourse;
}

function deleteCourse(req, res) {
  const id = +req.params.courseid;
  course.splice(id, 1);
  return course;
}

function updateCourse(req, res) {
  const putId = +req.params.courseid;
  const particluarCourse = course[putId];
  const isoDate = new Date(Date.now());
  const response = req.body.subjects;
  particluarCourse.datemodified = String(isoDate);
  particluarCourse.subjects = response;
  return particluarCourse;
}

module.exports = {
  getCourse,
  getIndividualCourse,
  postCourse,
  deleteCourse,
  updateCourse,
};
