import { use, Suspense } from "react";

const Message = ({ messagePromise }) => {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
};

const SuspenseUse = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
};

export default SuspenseUse;
