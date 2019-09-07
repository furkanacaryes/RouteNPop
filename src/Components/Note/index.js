import * as React from 'react';
import './style.scss';

class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleOutsideClick = ({ target }) => {
		const { activeNoteRef } = this.state;

		if (activeNoteRef && !activeNoteRef.contains(target)) {
			this.setState({
				activeNote: null,
				activeNoteRef: null,
			});
		}
	};

	componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	handleClick = (target, noteIndex) =>
		this.setState({
			activeNote: noteIndex,
			activeNoteRef: target,
		});

	isNoteActive = noteIndex =>
		this.state.activeNote === noteIndex ? 'active' : '';

	renderNote = ({ splittedText, notes }) =>
		splittedText &&
		splittedText.map((partialText, i) => (
			<div key={i} className="partial-text">
				<div className="partial-text__text">{partialText}</div>
				{notes[i] && (
					<div
						className={`foot-note ${this.isNoteActive(i)}`}
						onClick={({ currentTarget: t }) =>
							this.handleClick(t, i)
						}
					>
						<div className="pop-over shadow-radius-box">
							{notes[i]}
						</div>
					</div>
				)}
			</div>
		));

	render() {
		return (
			<div className="Note shadow-radius-box">
				{this.renderNote(this.props)}
			</div>
		);
	}
}

export default Note;
