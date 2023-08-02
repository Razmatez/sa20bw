"use client";
import { Checkbox as CheckboxComponent, Label } from "flowbite-react";

const Checkbox = (props) => {
	return (
		<div className="flex items-center gap-2">
			<CheckboxComponent id="remember" />
			<Label htmlFor="remember">
                Remember me
			</Label>
		</div>
	)
}

export default Checkbox;