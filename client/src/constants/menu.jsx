//External Lib Import
import {
  BsBagPlus,
  BsBagX,
  BsBox,
  BsCartPlus,
  BsCircle,
  BsGraphUp,
  BsPeople,
  BsEnvelope,
} from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import {
  MdPassword,
  MdOutlineBackup,
  MdOutlineInventory2,
} from "react-icons/md";
import {
  AiOutlineBranches,
  AiOutlineBank,
  AiOutlineSetting,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const MenuItems = () => {
  const { t } = useTranslation();

  return [
    { key: "navigation", label: t("Navigation"), isTitle: true },
    {
      key: "Dashboard",
      label: t("Dashboard"),
      url: "/dashboard",
      isTitle: false,
      icon: <RiDashboardLine className="side-bar-item-icon" />,
    },
    {
      key: "Customer",
      label: t("Customer"),
      isTitle: false,
      icon: <BsPeople className="side-bar-item-icon" />,
      children: [
        {
          key: "NewCustomer",
          label: t("New Customer"),
          url: "/customer/customer-create-update",
          parentKey: "Customer",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "CustomerList",
          label: t("Customer List"),
          url: "/customer/customer-list",
          parentKey: "Customer",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Supplier",
      label: t("Supplier"),
      isTitle: false,
      icon: <TbTruckDelivery className="side-bar-item-icon" />,
      children: [
        {
          key: "NewSupplier",
          label: t("New Supplier"),
          url: "/supplier/supplier-create-update",
          parentKey: "Supplier",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "SupplierList",
          label: t("Supplier List"),
          url: "/supplier/supplier-list",
          parentKey: "Supplier",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Expense",
      label: t("Expense"),
      isTitle: false,
      icon: <AiOutlineBank className="side-bar-item-icon" />,
      children: [
        {
          key: "ExpenseType",
          label: t("Expense Type"),
          url: "/",
          parentKey: "Expense",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          children: [
            {
              key: "NewExpenseType",
              label: t("New Expense Type"),
              url: "/expense-type/expense-type-create-update",
              parentKey: "ExpenseType",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
            {
              key: "ExpenseTypeList",
              label: t("Expense Type List"),
              url: "/expense-type/expense-type-list",
              parentKey: "ExpenseType",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
          ],
        },
        {
          key: "NewExpense",
          label: t("New Expense"),
          url: "/expense/expense-create-update",
          parentKey: "Expense",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "ExpenseList",
          label: t("Expense List"),
          url: "/expense/expense-list",
          parentKey: "Expense",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Product",
      label: t("Product"),
      isTitle: false,
      icon: <BsBox className="side-bar-item-icon" />,
      children: [
        {
          key: "ProductBrand",
          label: t("Brand"),
          url: "/",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          children: [
            {
              key: "NewBrand",
              label: t("New Brand"),
              url: "/brand/brand-create-update",
              parentKey: "ProductBrand",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
            {
              key: "BrandList",
              label: t("Brand List"),
              url: "/brand/brand-list",
              parentKey: "ProductBrand",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
          ],
        },
        {
          key: "ProductCategory",
          label: t("Category"),
          url: "/",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          children: [
            {
              key: "NewCategory",
              label: t("New Category"),
              url: "/category/category-create-update",
              parentKey: "ProductCategory",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
            {
              key: "CategoryList",
              label: t("Category List"),
              url: "/category/category-list",
              parentKey: "ProductCategory",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
          ],
        },
        {
          key: "ProductUnit",
          label: t("Unit"),
          url: "/",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          children: [
            {
              key: "NewUnit",
              label: t("New Unit"),
              url: "/unit/unit-create-update",
              parentKey: "ProductUnit",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
            {
              key: "UnitList",
              label: t("Unit List"),
              url: "/unit/unit-list",
              parentKey: "ProductUnit",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
          ],
        },
        {
          key: "ProductModel",
          label: t("Model"),
          url: "/",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          children: [
            {
              key: "NewModel",
              label: t("New Model"),
              url: "/model/model-create-update",
              parentKey: "ProductModel",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
            {
              key: "ModelList",
              label: t("Model List"),
              url: "/model/model-list",
              parentKey: "ProductModel",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
            },
          ],
        },
        {
          key: "NewProduct",
          label: t("New Product"),
          url: "/product/product-create-update",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "ProductList",
          label: t("Product List"),
          url: "/product/product-list",
          parentKey: "Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Purchase",
      label: t("Purchase"),
      isTitle: false,
      icon: <BsBagPlus className="side-bar-item-icon" />,
      children: [
        {
          key: "NewPurchase",
          label: t("New Purchase"),
          url: "/new-purchase",
          parentKey: "Purchase",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "PurchaseList",
          label: t("Purchase List"),
          url: "/purchase-list",
          parentKey: "Purchase",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Sale",
      label: t("Sale"),
      isTitle: false,
      icon: <BsCartPlus className="side-bar-item-icon" />,
      children: [
        {
          key: "NewSale",
          label: t("New Sale"),
          url: "/new-sale",
          parentKey: "Sale",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "SaleList",
          label: t("Sale List"),
          url: "/sale-list",
          parentKey: "Sale",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Return",
      label: t("Return"),
      isTitle: false,
      icon: <BsBagX className="side-bar-item-icon" />,
      children: [
        {
          key: "NewSaleReturn",
          label: t("New Sale Return"),
          url: "/new-sale-return",
          parentKey: "Return",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "NewPurchaseReturn",
          label: t("New Purchase Return"),
          url: "/new-purchase-return",
          parentKey: "Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "SaleReturnList",
          label: t("Sale Return List"),
          url: "/sale-return-list",
          parentKey: "Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "PurchaseReturnList",
          label: t("Purchase Return List"),
          url: "/purchase-return-list",
          parentKey: "Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Inventory",
      label: t("Inventory"),
      isTitle: false,
      icon: <MdOutlineInventory2 className="side-bar-item-icon" />,
      children: [
        {
          key: "AddOpeningStock",
          label: t("Add Opening Stock"),
          url: "/sale-Inventory",
          parentKey: "Inventory",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "StockAlert",
          label: t("Stock Alert"),
          url: "/sale-return-Inventory",
          parentKey: "Inventory",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "TransferStock",
          label: t("Transfer Stock"),
          url: "/purchase-return-Inventory",
          parentKey: "Inventory",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "StockLists",
          label: t("Stock Lists"),
          url: "/purchase-return-Inventory",
          parentKey: "Inventory",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Report",
      label: t("Report"),
      isTitle: false,
      icon: <BsGraphUp className="side-bar-item-icon" />,
      children: [
        {
          key: "SaleReport",
          label: t("Sale Report"),
          url: "/sale-report",
          parentKey: "Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "SaleReturnReport",
          label: t("Sale Return Report"),
          url: "/sale-return-report",
          parentKey: "Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "PurchaseReport",
          label: t("Purchase Report"),
          url: "/purchase-return-report",
          parentKey: "Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "PurchaseReturnReport",
          label: t("Purchase Return Report"),
          url: "/purchase-return-report",
          parentKey: "Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "ExpenseReport",
          label: t("Expense Report"),
          url: "/expense-report",
          parentKey: "Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Message",
      label: t("Message"),
      isTitle: false,
      url: "/message",
      icon: <BsEnvelope className="side-bar-item-icon" />,
      badge: { variant: "success", text: "40" },
    },
    {
      key: "Setting",
      label: t("Setting"),
      isTitle: false,
      icon: <AiOutlineSetting className="side-bar-item-icon" />,
      children: [
        {
          key: "WarehouseBranch",
          label: t("Warehouse/Branch"),
          url: "/profile",
          parentKey: "Setting",
          icon: (
            <AiOutlineBranches size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "ChangePassword",
          label: t("Change Password"),
          url: "/change-password",
          parentKey: "Setting",
          icon: <MdPassword size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "DatabaseBackup",
          label: t("Change Password"),
          url: "/database-backup",
          parentKey: "Setting",
          icon: <MdOutlineBackup size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
  ];
};

export default MenuItems;
