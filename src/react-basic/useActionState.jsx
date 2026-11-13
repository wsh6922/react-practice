import { useActionState } from "react";

const increment = (previousState, formData) => {
  return previousState + 1;
};

const StatefulForm = () => {
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form action={formAction}>
      {/* {state}
      <button formAction={formAction}>Increment</button> */}
    </form>
  );
};

const action = (currentState, formData) => {
  return "next state";
};

export default StatefulForm;
