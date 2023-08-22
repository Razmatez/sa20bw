import axios from "axios";

class Api {

	url: string;

	constructor(url: string){
		this.url = url;
	}

	get(){
		return axios.get
	}
}
