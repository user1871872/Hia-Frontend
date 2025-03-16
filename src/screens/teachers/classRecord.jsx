import React, { useState, useEffect } from 'react';
import ClassController from './ClassManagement';
import axios from 'axios';

const ClassManagement = () => {
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [classId, setClassId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Unauthorized: No token provided');
          return;
        }
        const res = await axios.get('http://localhost:8080/api/class/students', {
          headers: { 'x-auth-token': token }
        });
        setStudents(res.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch students.');
      }
    };

    fetchStudents();
  }, []);

  const handleCreateClass = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized: No token provided');
        return;
      }
      const res = await axios.post('http://localhost:8080/api/class/create', { className }, {
        headers: { 'x-auth-token': token }
      });
      setClassId(res.data.classId);
      alert('Class created successfully');
    } catch (error) {
      console.error(error);
      setError('Failed to create class.');
    }
  };

  const handleAddStudents = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized: No token provided');
        return;
      }
      await axios.post('http://localhost:8080/api/class/add-students', { classId, studentIds: selectedStudents }, {
        headers: { 'x-auth-token': token }
      });
      alert('Students added successfully');
    } catch (error) {
      console.error(error);
      setError('Failed to add students.');
    }
  };

  const handleStudentSelection = (studentId) => {
    setSelectedStudents(prevSelected =>
      prevSelected.includes(studentId)
        ? prevSelected.filter(id => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  return (
    <div className="container mx-auto p-4 pt-16">
      <h2 className="text-3xl font-bold mb-4">Class Management</h2>
      <form onSubmit={handleCreateClass} className="mb-8">
        <input
          type="text"
          placeholder="Enter Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="border rounded px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Create Class</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {classId && (
        <form onSubmit={handleAddStudents}>
          <h3 className="text-xl font-bold mb-4">Select Students to Add to Class</h3>
          <ul className='pt-10'>
            {students.map(student => (
              <li key={student._id} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value={student._id}
                    onChange={() => handleStudentSelection(student._id)}
                    className="mr-2"
                  />
                  {student.firstname} {student.lastname}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Add Students</button>
        </form>
      )}

      <div>
        <ClassController/>
      </div>
    </div>
  );
};

export default ClassManagement;
