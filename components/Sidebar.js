import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers, FaComments } from 'react-icons/fa';
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { TiBeer } from "react-icons/ti";
import { FiMail, FiFileText, FiBarChart2 } from "react-icons/fi";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdBusiness } from "react-icons/md";
import { useContext, useState } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import ActionButton from "@/components/ui-components/ActionButton";
import Modal from "@/components/ui-components/Modal";
import NextLink from "next/link";

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
  {
    name: "Notification",
    href: "/dashboard/notification",
    icon: FiBarChart2,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

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
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <NextLink href={href} className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                  }`}>

                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>

                </NextLink>
              </li>
            );
          })}
        </ul>
        {/* <div
          style={{ cursor: 'pointer' }}
          className={`sidebar__link ${
            router.pathname === '' ? 'sidebar__link--active' : ''
          }`}
          onClick={() => setLogoutModalOpen(true)}
        >
          <span className="sidebar__icon">
            <AiOutlineLogout />
          </span>
          <span className="sidebar_name">Logout</span>
        </div> */}
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
