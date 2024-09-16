import PropTypes from 'prop-types';

function Card({ data }) {
  return (
    <div className="col wrapper mt-4">
      <div className="card" style={{ width: '18rem' }}>
        <div className="image">
          <img src={data.image} className="card-img-top" alt="data-image" />
        </div>

        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <div className="card-footer text-secondary">{data.footerText}</div>
        </div>
      </div>
    </div>
  );
}

// Adding PropTypes validation
Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
