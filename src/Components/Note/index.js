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

		console.log('Clicked!', target, this.state.activeNoteRef);
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

	getStatefulClass = noteIndex =>
		[
			'pop-over',
			'shadow-radius-box',
			this.state.activeNote === noteIndex ? 'active' : '',
		].join(' ');

	renderNote = ({ splittedText, notes }) =>
		splittedText &&
		splittedText.map((partialText, i) => (
			<div key={i} className="partial-text">
				{partialText}
				<div
					className="foot-note"
					onClick={({ currentTarget: t }) => this.handleClick(t, i)}
				>
					<div className={this.getStatefulClass(i)}>{notes[i]}</div>
				</div>
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
