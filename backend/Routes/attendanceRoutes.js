const express = require('express');
const { markAttendance, getStudentAttendance } = require('../Controller/attendanceController');
const authGuard = require('../Middleware/authGuard');
const router = express.Router();

router.post('/mark', authGuard('student'), markAttendance);
router.get('/student/:id', authGuard('teacher'), getStudentAttendance);

module.exports = router;
