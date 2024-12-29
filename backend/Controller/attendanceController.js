const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  const studentId = req.user.id;
  const { date, status } = req.body;

  try {
    const existingRecord = await Attendance.findOne({ studentId, date });
    if (existingRecord) {
      return res.status(400).json({ message: 'Attendance already marked' });
    }
    const attendance = new Attendance({ studentId, date, status });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecords = await Attendance.find({ studentId: id }).sort({ date: -1 });
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
