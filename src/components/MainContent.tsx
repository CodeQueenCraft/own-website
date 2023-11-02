import "./MainContent.scss";

interface Props {
  children: React.ReactNode;
}

function MainContent({ children }: Props) {
  return (
    <main id="main">
      <div id="main-wrap">{children}</div>
    </main>
  );
}

export default MainContent;
