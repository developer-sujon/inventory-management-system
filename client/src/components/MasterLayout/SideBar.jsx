//External Lib  imports
import React from "react";
import {
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineSetting,
} from "react-icons/ai";
import { Accordion } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  BsBagPlus,
  BsBagX,
  BsBox,
  BsCartPlus,
  BsCircle,
  BsGraphUp,
  BsPeople,
} from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPassword, MdOutlineBackup } from "react-icons/md";

//Internal Lib  imports
import sidebarLogo from "../../assets/images/logo.png";

function SideBar({ openMenu }) {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine className="side-bar-item-icon" />,
      url: "/",
      subMenu: [],
    },
    {
      title: "Customer",
      icon: <BsPeople className="side-bar-item-icon" />,
      url: "/customer",
      subMenu: [
        {
          title: "New Customer",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-customer",
        },
        {
          title: "Customer List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/customer-list",
        },
      ],
    },
    {
      title: "Supplier",
      icon: <TbTruckDelivery className="side-bar-item-icon" />,
      url: "/supplier",
      subMenu: [
        {
          title: "New Supplier",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-supplier",
        },
        {
          title: "Supplier List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/supplier-list",
        },
      ],
    },
    {
      title: "Expense",
      icon: <AiOutlineBank className="side-bar-item-icon" />,
      url: "/expense",
      subMenu: [
        {
          title: "New Expense Type",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-expense-type",
        },
        {
          title: "Expense Type List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/expense-type-list",
        },
        {
          title: "New Expense",
          icon: <IoCreateOutline size={16} className="side-bar-subitem-icon" />,
          url: "/new-expense",
        },
        {
          title: "Expense List",
          icon: (
            <AiOutlineUnorderedList
              size={16}
              className="side-bar-subitem-icon"
            />
          ),
          url: "/expense-list",
        },
      ],
    },
    {
      title: "Product",
      icon: <BsBox className="side-bar-item-icon" />,
      url: "/Product",
      subMenu: [
        {
          title: "New Brand",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-brand",
        },
        {
          title: "Brand List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/brand-list",
        },
        {
          title: "New Category",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-category",
        },
        {
          title: "Category List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/category-list",
        },
        {
          title: "New Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-product",
        },
        {
          title: "Product List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/product-list",
        },
      ],
    },
    {
      title: "Purchase",
      icon: <BsBagPlus className="side-bar-item-icon" />,
      url: "/Purchase",
      subMenu: [
        {
          title: "New Purchase",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-purchase",
        },
        {
          title: "Purchase List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/purchase-list",
        },
      ],
    },
    {
      title: "Sale",
      icon: <BsCartPlus className="side-bar-item-icon" />,
      url: "/Sale",
      subMenu: [
        {
          title: "New Sale",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-sale",
        },
        {
          title: "Sale List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/sale-list",
        },
      ],
    },
    {
      title: "Return",
      icon: <BsBagX className="side-bar-item-icon" />,
      url: "/Return",
      subMenu: [
        {
          title: "New Sale Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-sale-return",
        },
        {
          title: "New Purchase Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/new-purchase-return",
        },
        {
          title: "Sale Return List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/sale-return-list",
        },
        {
          title: "Purchase Return List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/purchase-return-list",
        },
      ],
    },
    {
      title: "Report",
      icon: <BsGraphUp className="side-bar-item-icon" />,
      url: "/Report",
      subMenu: [
        {
          title: "Sale Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/sale-report",
          subMenu: [
            {
              title: "Sale Report",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
              url: "/sale-report",
            },
          ],
        },
        {
          title: "Sale Return Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/sale-return-report",
        },
        {
          title: "Purchase Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/purchase-report",
        },
        {
          title: "Purchase Return Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/purchase-return-report",
        },
        {
          title: "Expense Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/expense-report",
        },
      ],
    },
    {
      title: "Setting",
      icon: <AiOutlineSetting className="side-bar-item-icon" />,
      url: "/setting",
      subMenu: [
        {
          title: "Profile",
          icon: <AiOutlineUser size={16} className="side-bar-subitem-icon" />,
          url: "/profile",
        },
        {
          title: "Change Password",
          icon: <MdPassword size={16} className="side-bar-subitem-icon" />,
          url: "/change-password",
        },
        {
          title: "Database Backup",
          icon: <MdOutlineBackup size={16} className="side-bar-subitem-icon" />,
          url: "/database-backup",
        },
      ],
    },
  ];

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        }),
      );
    });

    return urlList.findIndex((items) =>
      items.includes(window.location.pathname),
    );
  };

  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <div className="side-nav-top text-center">
        <Link to="/" className="text-center">
          <img alt="" className="side-nav-logo" src={sidebarLogo} />
        </Link>
      </div>
      <Accordion defaultActiveKey={`${isSidebarAccordionActive()}`}>
        {sidebarItems.map((item, index) => {
          return item.subMenu.length !== 0 ? (
            <Accordion.Item key={index} eventKey={`${index}`} className="mt-2">
              <Accordion.Header>
                <div className="side-bar-item">
                  {item.icon}
                  <span className="side-bar-item-caption">{item.title}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.subMenu.map((subItem, index) => (
                  <NavLink
                    key={index}
                    className={(navData) =>
                      navData.isActive
                        ? "side-bar-subitem-active side-bar-subitem "
                        : "side-bar-subitem"
                    }
                    to={subItem?.url}
                  >
                    {subItem?.icon}
                    <span className="side-bar-subitem-caption">
                      {subItem?.title}
                    </span>
                  </NavLink>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ) : (
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "side-bar-item-active side-bar-item mt-2"
                  : "side-bar-item mt-2"
              }
              to={"/dashboard"}
              end
            >
              {item.icon}
              <span className="side-bar-item-caption">{item.title}</span>
            </NavLink>
          );
        })}
      </Accordion>
    </div>
  );
}

export default SideBar;
