const navReducer=(prevState="猫眼电影",action={})=>{

	let {type,payload}=action;

	switch(type){
		case "setTitle":
			return payload;
		default:
			return prevState;
	}
}

export default navReducer;