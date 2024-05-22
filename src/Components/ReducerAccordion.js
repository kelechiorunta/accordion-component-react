export const initialParam = {selected:0, isVisible:false}

export const ReducerAccordion = (state, action) =>{
    switch (action.type) {
        case "verified":{
            return{
                ...state, 
                selected: action.id, 
                isVisible: action.active
            }
        }
        default:{
            return state
        }
    }
}