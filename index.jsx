var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <title>Twitter markup</title>
                <link rel="stylesheet" href="style.scss" />
                <div className="layout">
                    <div className="layout__left-sidebar">
                        <img src="./svg/twitter.svg" className="brand" />
                        <div className="sidebar-menu">
                            <div className="sidebar-menu__item sidebar-menu__item--active">
                                <img src="./svg/home.svg" className="sidebar-menu__item-icon" />
                                Home
                            </div>
                            <div className="sidebar-menu__item">
                                <img src="./svg/explore.svg" className="sidebar-menu__item-icon" />
                                Explore
                            </div>
                            <div className="sidebar-menu__item">
                                <img src="./svg/notifications.svg" className="sidebar-menu__item-icon" />
                                Notifications
                            </div>
                            <div className="sidebar-menu__item">
                                <img src="./svg/messages.svg" className="sidebar-menu__item-icon" />
                                Messages
                            </div>
                            <div className="sidebar-menu__item">
                                <img src="./svg/profile.svg" className="sidebar-menu__item-icon" />
                                Profile
                            </div>
                            <div className="sidebar-menu__item">
                                <img src="./svg/more.svg" className="sidebar-menu__item-icon" />
                                More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});