import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassManagement = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8080/api/class/classes', {
        headers: {
          'x-auth-token': token
        }
      });
      setClasses(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch classes');
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {classes.map(cls => (
            <li key={cls._id}>
              <p>{cls.className}</p>
              <p>{cls.staff.username}</p>
              <ul>
                {cls.students.map(student => (
                  <li key={student._id}>
                    {student.firstname} {student.lastname}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassManagement;
