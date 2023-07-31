import PropTypes from 'prop-types'

const SpinningText = ({ text }) => {
  const length = text.length
  const deg = 160 / length

  return (
    <>
      <div className='spinningText absolute w-[100%] h-[100%] grid place-item-center z-20'>
        <p className='text-[20px] md:text-[30px] text-white'>
          {text.split('').map((letra, i) => (
            <span key={i} style={{ transform: `rotate(${deg * i}deg)` }}>
              {letra}
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

SpinningText.propTypes = {
  text: PropTypes.string.isRequired
}

export default SpinningText
