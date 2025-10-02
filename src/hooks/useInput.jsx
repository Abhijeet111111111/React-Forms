import {useState} from "react";

export default function useInput(initialValue,validationFn){
    const [enteredValue,setEnteredValue] = useState(initialValue)
    const [didEdit,setDidEdit] = useState(false);
    function handleInputChange(event){
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }
    function handleInputBlur(){
        setDidEdit(true);
    }
    const isNotValid = didEdit &&  !validationFn(enteredValue);

    return {
        enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError : isNotValid
    }
}