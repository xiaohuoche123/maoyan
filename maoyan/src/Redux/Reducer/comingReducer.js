const comingReducer=(prevState=[],action={})=>{

	let {type,payload}=action;

	switch(type){
		case "cominglist":
			return payload;
		default:
			return prevState;
	}
}

export default comingReducer;