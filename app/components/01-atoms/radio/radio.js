"use client";
import { Label, Radio as RadioComponent } from "flowbite-react";

const Radio = () => {

	return (
		<div className="flex items-center gap-2">
			<RadioComponent
				defaultChecked
				id="united-state"
				name="countries"
				value="USA"
			/>
			<Label htmlFor="united-state">
          United States
			</Label>
		</div>
	)

}

export default Radio;