function ScholarshipCard({ scholarship, onApply }) {
  return (
    <div className="scholarship-card">
      <h4>{scholarship.name}</h4>
      <p>{scholarship.description}</p>
      <p><strong>Amount:</strong> {scholarship.amount}</p>
      <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
      <p className="deadline"><strong>Deadline:</strong> {scholarship.deadline}</p>
      <button className="btn btn-primary" onClick={onApply}>Apply</button>
    </div>
  );
}

export default ScholarshipCard;