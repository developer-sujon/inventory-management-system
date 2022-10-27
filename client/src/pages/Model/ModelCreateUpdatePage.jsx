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
import ModelRequest from "../../APIRequest/ModelRequest";

const ModelCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { ModelDetails } = useSelector((state) => state.Model);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      ModelRequest.ModelDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    ModelName: yup.string().required("Please Enter Model Name"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateModel = (values) => {
    if (!ObjectID) {
      ModelRequest.ModelCreate({
        ModelName: values.ModelName,
        ModelDetails: values.ModelDetails,
        ModelStatus: values.ModelStatus,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/model/model-list");
        }
      });
    } else {
      ModelRequest.ModelUpdate(ObjectID, {
        ModelName: values.ModelName,
        ModelDetails: values.ModelDetails,
        ModelStatus: values.ModelStatus,
      }).then((result) => {
        if (result) {
          navigate("/model/model-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Model", path: "/model/model-list" },
          {
            label: !ObjectID ? "Create Model" : "Update Model",
            path: "/model/model-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Model" : "Update Model"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateModel}
                    validationSchema={validationSchema}
                    defaultValues={ModelDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="ModelName"
                          label={t("Model Name")}
                          placeholder={t("Enter Model Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="ModelDetails"
                          label={t("Model Details")}
                          placeholder={t("Enter Model Details")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />

                        <FormInput
                          name="ModelStatus"
                          label={t("Model Status")}
                          placeholder={t("Enter Model Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Model" : "Update Model"}
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

export default ModelCreateUpdatePage;
