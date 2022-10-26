//External Lib Import
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//Internal Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { FormInput } from "../../components/Ui/";
import { VerticalForm } from "../../components/Ui";
import CustomerRequest from "../../APIRequest/CustomerRequest";
import { defaultAvatarImg } from "../../helpers/Default";

const CustomerCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { CustomerDetails } = useSelector((state) => state.Customer);
  let [PreviewImg, SetPreviewImg] = useState(defaultAvatarImg);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      CustomerRequest.CustomerDetails(id).then((result) => {
        SetPreviewImg(CustomerDetails?.CustomerAvatar);
      });

      SetObjectID(id);
    }
  }, []);

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
  const CreateUpdateCustomer = (values) => {
    if (!values.CustomerAvatar) values.CustomerAvatar = defaultAvatarImg;
    if (!ObjectID) {
      CustomerRequest.CustomerCreate({
        CustomerName: values.CustomerName,
        CustomerEmail: values.CustomerEmail,
        CustomerPhone: values.CustomerPhone,
        CustomerAddress: values.CustomerAddress,
        CustomerAvatar: values.CustomerAvatar,
        CustomerStatus: values.CustomerStatus,
      }).then((result) => {
        if (result) {
          navigate("/customer/customer-list");
        }
      });
    } else {
      CustomerRequest.CustomerUpdate(ObjectID, {
        CustomerName: values.CustomerName,
        CustomerEmail: values.CustomerEmail,
        CustomerPhone: values.CustomerPhone,
        CustomerAddress: values.CustomerAddress,
        CustomerAvatar: values.CustomerAvatar,
        CustomerStatus: values.CustomerStatus,
      }).then((result) => {
        if (result) {
          navigate("/customer/customer-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Customer", path: "/customer/customer-list" },
          {
            label: !ObjectID ? "Create Customer" : "Update Customer",
            path: "/customer/customer-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Customer" : "Update Customer"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateCustomer}
                    validationSchema={validationSchema}
                    defaultValues={CustomerDetails}
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
                          defaultValue={CustomerDetails.CustomerPhone}
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
                        <FormInput
                          name="CustomerStatus"
                          label={t("Customer Status")}
                          placeholder={t("Enter Customer Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>

                      <Col xl={6}>
                        <br />
                        <img
                          src={PreviewImg || CustomerDetails?.CustomerAvatar}
                          alt="CustomerAvatar"
                        />
                        <hr />
                        <FormInput
                          name="CustomerAvatar"
                          label={t("Customer Avatar")}
                          type="file"
                          placeholder={t("Upload Customer Avatar")}
                          containerClass={"mb-3"}
                          onChange={(img) => SetPreviewImg(img)}
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Customer" : "Update Customer"}
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
