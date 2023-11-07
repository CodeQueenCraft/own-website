import "./MainContent.scss";

interface Props {
  children: React.ReactNode;
}

function MainContent({ children }: Props) {
  return (
    <main className="main">
      <div className="main-wrap">{children}</div>
    </main>
  );
}

export default MainContent;
