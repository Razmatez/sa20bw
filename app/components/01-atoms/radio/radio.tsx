import React from 'react';

export class Radio extends React.Component<{ key: any, checked: boolean, label: string }> {
	render() {
		let { key, checked, label, ...props } = this.props;
		return (
			<li className="form-item--checkbox__item">
				<label htmlFor="radio{{ key }}">
					<input id="radio{{ key }}" name="radio" type="radio"/>{label}
				</label>
			</li>
		)
	}
}