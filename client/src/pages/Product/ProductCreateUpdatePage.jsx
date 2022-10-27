//External Lib Import
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//Internal Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { FormInput } from "../../components/Ui";
import { VerticalForm } from "../../components/Ui";
import ProductRequest from "../../APIRequest/ProductRequest";
import BrandRequest from "../../APIRequest/BrandRequest";
import CategoryRequest from "../../APIRequest/CategoryRequest";
import ModelRequest from "../../APIRequest/ModelRequest";
import UnitRequest from "../../APIRequest/UnitRequest";

const ProductCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { ProductDetails } = useSelector((state) => state.Product);
  const { BrandDropDown } = useSelector((state) => state.Brand);
  const { CategoryDropDown } = useSelector((state) => state.Category);
  const { UnitDropDown } = useSelector((state) => state.Unit);
  const { ModelDropDown } = useSelector((state) => state.Model);

  const navigate = useNavigate();

  useEffect(() => {
    BrandRequest.BrandDropDown();
    CategoryRequest.CategoryDropDown();
    UnitRequest.UnitDropDown();
    ModelRequest.ModelDropDown();
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      ProductRequest.ProductDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    ProductName: yup.string().required("Please Enter Product Name"),
    BrandId: yup.string().required("Please Select Product Brand"),
    CategoryId: yup.string().required("Please Select Product Category"),
    UnitId: yup.string().required("Please Select Product Unit"),
    ModelId: yup.string().required("Please Select Product Mode"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateProduct = (values) => {
    if (!ObjectID) {
      ProductRequest.ProductCreate({
        ProductName: values.ProductName,
        BrandId: values.BrandId,
        CategoryId: values.CategoryId,
        UnitId: values.UnitId,
        ModelId: values.ModelId,
        ProductDetails: values.ProductDetails,
        ProductStatus: values.ProductStatus,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/product/product-list");
        }
      });
    } else {
      ProductRequest.ProductUpdate(ObjectID, {
        ProductName: values.ProductName,
        BrandId: values.BrandId,
        CategoryId: values.CategoryId,
        UnitId: values.UnitId,
        ModelId: values.ModelId,
        ProductDetails: values.ProductDetails,
        ProductStatus: values.ProductStatus,
      }).then((result) => {
        if (result) {
          navigate("/product/product-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Product", path: "/product/product-list" },
          {
            label: !ObjectID ? "Create Product" : "Update Product",
            path: "/product/product-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Product" : "Update Product"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateProduct}
                    validationSchema={validationSchema}
                    defaultValues={ProductDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="ProductName"
                          label={t("Product Name")}
                          placeholder={t("Enter Product Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="BrandId"
                          label={t("Product Brand")}
                          placeholder={t("Enter Product Brand")}
                          containerClass={"mb-3"}
                          type="react-single-select"
                          options={BrandDropDown}
                          defaultValue={BrandDropDown.find(
                            (i) => i.value === ProductDetails?.BrandId,
                          )}
                        />

                        <FormInput
                          name="CategoryId"
                          label={t("Product Category")}
                          placeholder={t("Enter Product Category")}
                          containerClass={"mb-3"}
                          type="react-single-select"
                          options={CategoryDropDown}
                          defaultValue={CategoryDropDown.find(
                            (i) => i.value === ProductDetails?.CategoryId,
                          )}
                        />

                        <FormInput
                          name="UnitId"
                          label={t("Product Unit")}
                          placeholder={t("Enter Product Unit")}
                          containerClass={"mb-3"}
                          type="react-single-select"
                          options={UnitDropDown}
                          defaultValue={UnitDropDown.find(
                            (i) => i.value === ProductDetails?.UnitId,
                          )}
                        />

                        <FormInput
                          name="ModelId"
                          label={t("Product Model")}
                          placeholder={t("Enter Product Model")}
                          containerClass={"mb-3"}
                          type="react-single-select"
                          options={ModelDropDown}
                          defaultValue={ModelDropDown.find(
                            (i) => i.value === ProductDetails?.ModelId,
                          )}
                        />

                        <FormInput
                          name="ProductDetails"
                          label={t("Product Details")}
                          placeholder={t("Enter Product Details")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />

                        <FormInput
                          name="ProductStatus"
                          label={t("Product Status")}
                          placeholder={t("Enter Product Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Product" : "Update Product"}
                        </Button>
                      </Col>
                    </Row>
                  </VerticalForm>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductCreateUpdatePage;
