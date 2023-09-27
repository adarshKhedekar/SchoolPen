import Header from "./Header";
import OptionsSelection from "./OptionsSelection";
import "./UserMainContent.css";

function MainContent() {

  return (
    <div className="user-main-container">
      {/* we can change title dynamically for header */}
      <Header title={"Create Quiz"} />

      <div className="assign-user-container">
        <div className="assign-user">
            <OptionsSelection/>
        </div>
        <div className="btn">Assign User</div>
      </div>
    </div>
  );
}

export default MainContent;
