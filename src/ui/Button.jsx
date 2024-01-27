import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {

    const base = "inline-block text-base bg-[#7F56D9] rounded-lg w-full font-medium  text-white hover:text-[#7F56D9] hover:bg-white hover:border-2 hover:border-[#7F56D9] transition-colors duration-300 disabled:cursor-not-allowed"
    
    const styles = {
      primary: base + " px-4 py-3 md:px-6 md:py-4",
    }

    if (to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick) return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
              {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
            {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  };

export default Button