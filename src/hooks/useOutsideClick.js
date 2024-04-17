import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // the modal window = ref.current
        // contains = returns true so we want to see if click is true
        // ref.current.contains(e.target) the click did not happen inside the modal
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      // EventListener has bubbling phase inside we need to use Capturing phase
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
