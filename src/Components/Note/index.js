import * as React from 'react';
import './style.scss';

class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: '',
		};
	}

	componentDidMount() {
        
    }

	footNoteRef = React.createRef();

	handleClick = noteIndex =>
		this.setState({
			activeNote: noteIndex,
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
					ref={this.footNoteRef}
					onClick={() => this.handleClick(i)}
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
