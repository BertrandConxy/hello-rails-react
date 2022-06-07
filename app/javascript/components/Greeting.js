import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import {loadGreetings} from "../redux/greetings";
import PropTypes from "prop-types"
const Greeting = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(loadGreetings());
    },[])
const greeting = useSelector((state) => state.greetings);

    if(greeting.data) {
        return (
          <>
            <h1>{greeting.data.text}</h1>
            <button onClick={() => dispatch(loadGreetings())}>
              Next message
            </button>
          </>
        );
    } else {
        return (
          <>
            <h1>Loading.....</h1>
          </>
        );
    }

  }
Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
