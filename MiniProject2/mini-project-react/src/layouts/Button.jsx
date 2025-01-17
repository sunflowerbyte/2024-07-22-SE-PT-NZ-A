import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-blue hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired, 
}

export default Button;