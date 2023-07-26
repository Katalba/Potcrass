import PropTypes from 'prop-types';

const Title = ({title}) => {
  return (
    <section className="m-10 text-center">
      <h2 className="text-[25px] md:text-[40px]">{title}</h2>
    </section>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default Title;
