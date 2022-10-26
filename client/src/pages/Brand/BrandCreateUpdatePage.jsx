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
import BrandRequest from "../../APIRequest/BrandRequest";

const BrandCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { BrandDetails } = useSelector((state) => state.Brand);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      BrandRequest.BrandDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    BrandName: yup.string().required("Please Enter Brand Name"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateBrand = (values) => {
    if (!ObjectID) {
      BrandRequest.BrandCreate({
        BrandName: values.BrandName,
        BrandDescription: values.BrandDescription,
        BrandStatus: values.BrandStatus,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/brand/brand-list");
        }
      });
    } else {
      BrandRequest.BrandUpdate(ObjectID, {
        BrandName: values.BrandName,
        BrandDescription: values.BrandDescription,
        BrandStatus: values.BrandStatus,
      }).then((result) => {
        if (result) {
          navigate("/brand/brand-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Brand", path: "/brand/brand-list" },
          {
            label: !ObjectID ? "Create Brand" : "Update Brand",
            path: "/brand/brand-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Brand" : "Update Brand"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateBrand}
                    validationSchema={validationSchema}
                    defaultValues={BrandDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="BrandName"
                          label={t("Brand Name")}
                          placeholder={t("Enter Brand Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="BrandDescription"
                          label={t("Brand Description")}
                          placeholder={t("Enter Brand Description")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />

                        <FormInput
                          name="BrandStatus"
                          label={t("Brand Status")}
                          placeholder={t("Enter Brand Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Brand" : "Update Brand"}
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

export default BrandCreateUpdatePage;
