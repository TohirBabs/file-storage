export default function LeftContent() {
  return (
    <div className="lg:w-200px pl-2">
      {/* starting of layout */}
      <div className="compnay_logo">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
      </div>
      <div className="positioning">
        <form action="">
          <div
            className="menu_one"
            onMouseOver={window["mouseOver1"]}
            onMouseLeave={window["mouseLeave"]}
          >
            <div className="menu_icons">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div className="menu_name">Analysis</div>
            <div className="hover">
              <div className="hover_shape" id="hover1"></div>
            </div>
          </div>
        </form>
        <form action="">
          <div
            className="menu_one"
            onMouseOver={window["mouseOver2"]}
            onMouseLeave={window["mouseLeave1"]}
          >
            <div className="menu_icons">
              <i class="fa-solid fa-server"></i>
            </div>
            <div className="menu_name">File Storage</div>
            <div className="hover">
              <div className="hover_shape" id="hover2"></div>
            </div>
          </div>
        </form>
        <form action="">
          <div
            className="menu_one"
            onMouseOver={window["mouseOver3"]}
            onMouseLeave={window["mouseLeave2"]}
          >
            <div className="menu_icons">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="menu_name">Profile</div>
            <div className="hover">
              <div className="hover_shape" id="hover3"></div>
            </div>
          </div>
        </form>
        <form action="">
          <div
            className="menu_one"
            onMouseOver={window["mouseOver4"]}
            onMouseLeave={window["mouseLeave3"]}
          >
            <div className="menu_icons">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div className="menu_name">Settings</div>
            <div className="hover">
              <div className="hover_shape" id="hover4"></div>
            </div>
          </div>
        </form>
      </div>

      <div className="bottom_nav_bar">
        <form action="">
          <div className="menu_one">
            <div className="menu_icons">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <div className="menu_name">Help</div>
            <div className="hover">
              <div className="hover_shape"></div>
            </div>
          </div>
        </form>
        <form action="">
          <div className="menu_one">
            <div className="menu_icons">
              <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <div className="menu_name">Logout</div>
            <div className="hover">
              <div className="hover_shape"></div>
            </div>
          </div>
        </form>
      </div>
      {/* ending of layout */}
    </div>
  );
}
