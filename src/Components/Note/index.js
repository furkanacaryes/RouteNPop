import * as React from 'react';

class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
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

	render() {
		const { splittedText, notes } = this.props;

		return (
			splittedText &&
			splittedText.map((partialText, i) => (
				<div key={i} className="partial-text">
					{partialText}
					<div
						className="foot-note"
						ref={this.footNoteRef}
						onClick={() => this.handleClick(i)}
					>
						<div className={this.getStatefulClass(i)}>
							{notes[i]}
						</div>
					</div>
				</div>
			))
		);
	}
}

export default Note;
