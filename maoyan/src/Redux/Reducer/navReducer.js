const navReducer=(prevState,action)=>{

	let {type,payload}=action;

	switch(type){
		case "":
			return payload;
		default:
			return prevState;
	}
}

export default navReducer;