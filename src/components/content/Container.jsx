import { useEffect } from "react";

const Container = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container px-4">
      {children}
    </div>
  )
}

export default Container