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
import CategoryRequest from "../../APIRequest/CategoryRequest";

const CategoryCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { CategoryDetails } = useSelector((state) => state.Category);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      CategoryRequest.CategoryDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    CategoryName: yup.string().required("Please Enter Category Name"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateCategory = (values) => {
    if (!ObjectID) {
      CategoryRequest.CategoryCreate({
        CategoryName: values.CategoryName,
        CategoryDetails: values.CategoryDetails,
        CategoryStatus: values.CategoryStatus,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/category/category-list");
        }
      });
    } else {
      CategoryRequest.CategoryUpdate(ObjectID, {
        CategoryName: values.CategoryName,
        CategoryDetails: values.CategoryDetails,
        CategoryStatus: values.CategoryStatus,
      }).then((result) => {
        if (result) {
          navigate("/category/category-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Category", path: "/category/category-list" },
          {
            label: !ObjectID ? "Create Category" : "Update Category",
            path: "/category/category-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Category" : "Update Category"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateCategory}
                    validationSchema={validationSchema}
                    defaultValues={CategoryDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="CategoryName"
                          label={t("Category Name")}
                          placeholder={t("Enter Category Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="CategoryDetails"
                          label={t("Categorie Details")}
                          placeholder={t("Enter Categorie Details")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />

                        <FormInput
                          name="CategoryStatus"
                          label={t("Category Status")}
                          placeholder={t("Enter Category Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Category" : "Update Category"}
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

export default CategoryCreateUpdatePage;
