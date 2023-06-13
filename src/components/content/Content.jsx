import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import { useEffect } from "react";

const Content = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <ContentHeader title={title} />
      <ContentBody>
        {children}
      </ContentBody>
    </>
  )
}

export default Content