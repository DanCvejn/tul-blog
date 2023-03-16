import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";

const Content = ({ title, children }) => {
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