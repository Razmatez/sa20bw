import React from 'react';

export class Checkbox extends React.Component<{ key: any, checked: boolean, label: string }> {
	render() {
		let { key, checked, label, ...props } = this.props;
		return (
			<li className="form-item--checkbox__item">
				<label htmlFor="checkbox{{ key }}">
					<input id="checkbox{{ key }}" name="checkbox" type="checkbox"/>{label}
				</label>
			</li>
		)
	}
}