import { useEffect, useState } from "react";

export function useSlide(className = "mySlides") {
  const [fading, setFading] = useState("animate-fading");
  useEffect(() => {
    function carousel() {
      const x = document.getElementsByClassName(className);
      if (x.length < 2) {
        setFading("");
        return;
      }
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 9000);
    }

    let myIndex = 0;
    carousel();
  }, []);
  return { fading };
}
