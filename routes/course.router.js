const express = require("express");
const courseRouter = express.Router();

const courseController = require("../controllers/course.controller");

courseRouter.get("/", courseController.getCourses);
courseRouter.get("/:courseid", courseController.getCourseById);
courseRouter.post("/", courseController.createCourse);
courseRouter.delete("/:courseid", courseController.removeCourse);
courseRouter.put("/:courseid", courseController.updateCourseById);

module.exports = courseRouter;
