import "./Profile.scss";
import React from "react";
import PropTypes from "prop-types";

class Profile extends React.Component {
	render() {
		const { user } = this.props;
		const { images, firstName, lastName } = user;

		return (
			<div className="Profile">
				<img src={images[0].small} className="Profile-picture"/>
				<div className="Profile-name">
					{firstName} {lastName}
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	user: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.shape({
			small:PropTypes.string,
			large: PropTypes.string,
		})),
	}).isRequired,
};

export default Profile;
