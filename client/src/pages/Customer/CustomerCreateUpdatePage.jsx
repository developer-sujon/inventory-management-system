//External Lib Import
import { Row, Col, Card, Button } from "react-bootstrap";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

//Internal Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { FormInput } from "../../components/Ui/";
import { VerticalForm } from "../../components/Ui";
import ResizeFile from "../../helpers/ResizeFile";

const CustomerCreateUpdatePage = () => {
  const { t } = useTranslation();

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    CustomerName: yup.string().required("Please Enter Customer Name"),
    CustomerEmail: yup.string().required("Please Enter Customer Email"),
    CustomerPhone: yup.string().required("Please Enter Customer Phone"),
    CustomerAddress: yup.string().required("Please Enter Customer Address"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateCustomer = async (values) => {
    const file = values.CustomerAvatar[0];
    const image = await ResizeFile(file);
    console.log(image);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Customer", path: "/customer-list" },
          {
            label: "Create Customer",
            path: "/customer-list",
            active: true,
          },
        ]}
        title={"Create Customer"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateCustomer}
                    validationSchema={validationSchema}
                    defaultValues={{
                      CustomerName: "",
                      CustomerEmail: "",
                      CustomerPhone: "",
                      CustomerAddress: "",
                      CustomerAvatar: "",
                    }}
                  >
                    <Row>
                      <Col xl={6}>
                        <FormInput
                          name="CustomerName"
                          label={t("Customer Name")}
                          placeholder={t("Enter Customer Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="CustomerEmail"
                          label={t("Customer Email")}
                          placeholder={t("Enter Customer Email")}
                          type="email"
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          label={t("Mobile Number")}
                          type="react-phone"
                          name="CustomerPhone"
                          placeholder={t("Enter your mobile")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="CustomerAddress"
                          label={t("Customer Address")}
                          placeholder={t("Enter Customer Address")}
                          type="textarea"
                          containerClass={"mb-3"}
                          rows="3"
                          as="textarea"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          name="CustomerAvatar"
                          label={t("Customer Avatar")}
                          type="dropzone"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          Submit
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

export default CustomerCreateUpdatePage;
