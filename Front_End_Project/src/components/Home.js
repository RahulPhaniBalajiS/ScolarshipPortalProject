import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ScholarshipCard from './ScholarshipCard';
import ApplyModal from './ApplyModal';
import { AuthContext } from '../context/AuthContext';

function Home({ scholarships }) {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(searchText.toLowerCase()) ||
    scholarship.amount.toLowerCase().includes(searchText.toLowerCase()) ||
    scholarship.eligibility.toLowerCase().includes(searchText.toLowerCase()) ||
    scholarship.deadline.toLowerCase().includes(searchText.toLowerCase())
  );

  const openApplyModal = (scholarship) => {
    if (!isLoggedIn) {
      alert('Please log in to apply.');
      navigate('/login');
      return;
    }
    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  const closeApplyModal = () => {
    setShowModal(false);
    setSelectedScholarship(null);
  };

  return (
    <div>
      <div className="filter-section">
        <input
          type="text"
          className="form-control"
          placeholder="Search scholarships by name, amount, eligibility, or deadline"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <h2>Available Scholarships</h2>
      {filteredScholarships.map(scholarship => (
        <ScholarshipCard
          key={scholarship.id}
          scholarship={scholarship}
          onApply={() => openApplyModal(scholarship)}
        />
      ))}
      {showModal && (
        <ApplyModal
          scholarship={selectedScholarship}
          onClose={closeApplyModal}
        />
      )}
    </div>
  );
}

export default Home;