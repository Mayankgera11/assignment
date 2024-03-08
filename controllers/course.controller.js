const {
  getCourse,
  getIndividualCourse,
  postCourse,
  deleteCourse,
  updateCourse,
} = require("../Models/course");

function getCourses(req, res) {
  try {
    const course = getCourse(req, res);
    if (course.length == 0) {
      throw new Error("No Courses Found");
    } else {
      res.status(200).json(course);
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

function getCourseById(req, res) {
  try {
    const particular_Course = getIndividualCourse(req, res);
    if (!particular_Course) {
      throw new Error("Invalid Input");
    } else {
      res.status(200).json(particular_Course);
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}
function createCourse(req, res) {
  try {
    if (!req.body.course_name || !req.body.subjects) {
      throw new Error("Missing Course name  or subjects or both");
    } else {
      res.status(201).json(postCourse(req, res));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

function removeCourse(req, res) {
  try {
    const course = deleteCourse(req, res);
    if (course.length == 0) {
      throw new Error("No courses Available to be deleted");
    } else {
      res.status(200).json(course);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

function updateCourseById(req, res) {
  try {
    const response = req.body.subjects;
    if (!response) {
      throw new Error("Missing updated Subjects");
    } else {
      res.status(200).json(updateCourse(req, res));
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  removeCourse,
  updateCourseById,
};
