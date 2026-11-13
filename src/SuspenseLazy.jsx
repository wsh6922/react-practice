import { lazy, Suspense } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));

const SuspenseLazy = () => {
  return (
    <Suspense>
      <h2>Preview</h2>
      <MarkdownPreview />
    </Suspense>
  );
};

export default SuspenseLazy;
