import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reducers/counterReducer";

export default function Home() {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.counter);

  return (
    <div>
      Home
      {/* <p>Counter: {value ?? 0}</p>
      <p>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          +1
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          -1
        </Button>
      </p> */}
    </div>
  );
}
