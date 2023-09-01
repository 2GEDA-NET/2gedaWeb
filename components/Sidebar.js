import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers, FaComments } from 'react-icons/fa';
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { TiBeer } from "react-icons/ti";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMail, FiFileText, FiBarChart2 } from "react-icons/fi";
import { AiOutlineFileText, AiOutlineNotification, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdBusiness } from "react-icons/md";
import { useContext, useState } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import ActionButton from "@/components/ui-components/ActionButton";
import Modal from "@/components/ui-components/Modal";
import NextLink from "next/link";
import NotificationPage from "./NotificationPage";

const sidebarItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: AiOutlineHome,
  },
  {
    name: "Business",
    href: "/dashboard/business",
    icon: MdBusiness,
  },
  {
    name: "People",
    href: "/dashboard/people",
    icon: FaUsers,
  },
  {
    name: "Messages",
    href: "/dashboard/message",
    icon: FaComments,
  },

];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);


  // Click handler for the "Notification" item
  const handleNotificationClick = () => {
    console.log("Notification icon clicked");
    setNotificationOpen(true);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };
  // Click handler for the "Logout" item
  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session)

    // Redirect to login page after logout
    router.push("/");
  }

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <NextLink href={href} className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""}`}>
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </NextLink>
            </li>
          ))}

          <li className="sidebar__item" key="Notification">
            <div
              className={`sidebar__link ${router.pathname === "/dashboard/notification"
                ? "sidebar__link--active"
                : ""
                }`}
              onClick={handleNotificationClick} // Add the click handler
            >
              <span className="sidebar__icon">
                <IoMdNotificationsOutline />
              </span>
              <span className="sidebar__name">Notification</span>
            </div>
            {isNotificationOpen && (
              <NotificationPage isOpen={isNotificationOpen} onClose={handleNotificationClose} />
            )}
          </li>
          <li className="sidebar__item" key="Logout">
            <div
              className={`sidebar__link ${router.pathname === "/dashboard/logout"
                ? "sidebar__link--active"
                : ""
                }`}
              onClick={handleLogoutClick} // Add the click handler
            >
              <span className="sidebar__icon">
                <AiOutlineLogout />
              </span>
              <span className="sidebar__name">Logout</span>
            </div>
          </li>
        </ul>
      </aside>
      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={logoutModalOpen}
        heading={"Confirm Logout"}
        positiveText={"Logout"}
        negativeText={"Cancel"}
        onClose={() => setLogoutModalOpen(false)}
        onSubmit={handleLogout}
        onCancel={() => setLogoutModalOpen(false)}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>

    </div>
  );
};

export default Sidebar;
