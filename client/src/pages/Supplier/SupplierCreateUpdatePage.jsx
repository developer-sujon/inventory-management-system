//External Lib Import
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//Internal Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { FormInput } from "../../components/Ui";
import { VerticalForm } from "../../components/Ui";
import SupplierRequest from "../../APIRequest/SupplierRequest";
import { defaultAvatarImg } from "../../helpers/Default";
import { SetFormValueOnChange } from "../../redux/slices/SupplierSlice";

const SupplierCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  let [PreviewImg, SetPreviewImg] = useState(defaultAvatarImg);
  const dispatch = useDispatch();
  const { SupplierDetails } = useSelector((state) => state.Supplier);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      SupplierRequest.SupplierDetails(id).then((result) => {
        SetPreviewImg(SupplierDetails?.SupplierAvatar);
      });
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    SupplierName: yup.string().required("Please Enter Supplier Name"),
    SupplierEmail: yup.string().required("Please Enter Supplier Email"),
    SupplierPhone: yup.string().required("Please Enter Supplier Phone"),
    SupplierAddress: yup.string().required("Please Enter Supplier Address"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateSupplier = (values) => {
    if (!values.SupplierAvatar) values.SupplierAvatar = defaultAvatarImg;
    if (!ObjectID) {
      SupplierRequest.SupplierCreate({
        SupplierName: values.SupplierName,
        SupplierEmail: values.SupplierEmail,
        SupplierPhone: values.SupplierPhone,
        SupplierAddress: values.SupplierAddress,
        SupplierAvatar: values.SupplierAvatar,
      }).then((result) => {
        if (result) {
          navigate("/supplier/supplier-list");
        }
      });
    } else {
      SupplierRequest.SupplierUpdate(ObjectID, {
        SupplierName: values.SupplierName,
        SupplierEmail: values.SupplierEmail,
        SupplierPhone: values.SupplierPhone,
        SupplierAddress: values.SupplierAddress,
        SupplierAvatar: values.SupplierAvatar,
      }).then((result) => {
        if (result) {
          navigate("/supplier/supplier-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Supplier", path: "/supplier/supplier-list" },
          {
            label: !ObjectID ? "Create Supplier" : "Update Supplier",
            path: "/supplier/supplier-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Supplier" : "Update Supplier"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateSupplier}
                    validationSchema={validationSchema}
                    defaultValues={SupplierDetails}
                  >
                    <Row>
                      <Col xl={6}>
                        <FormInput
                          name="SupplierName"
                          label={t("Supplier Name")}
                          placeholder={t("Enter Supplier Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="SupplierEmail"
                          label={t("Supplier Email")}
                          placeholder={t("Enter Supplier Email")}
                          type="email"
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          label={t("Mobile Number")}
                          type="react-phone"
                          name="SupplierPhone"
                          placeholder={t("Enter your mobile")}
                          containerClass={"mb-3"}
                          defaultValue={SupplierDetails.SupplierPhone}
                        />

                        <FormInput
                          name="SupplierAddress"
                          label={t("Supplier Address")}
                          placeholder={t("Enter Supplier Address")}
                          type="textarea"
                          containerClass={"mb-3"}
                          rows="3"
                          as="textarea"
                        />
                      </Col>
                      <Col xl={6}>
                        <br />
                        <img
                          src={PreviewImg || SupplierDetails?.SupplierAvatar}
                          alt="SupplierAvatar"
                        />
                        <hr />
                        <FormInput
                          name="SupplierAvatar"
                          label={t("Supplier Avatar")}
                          type="file"
                          placeholder={t("Upload Supplier Avatar")}
                          containerClass={"mb-3"}
                          onChange={(img) => SetPreviewImg(img)}
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

export default SupplierCreateUpdatePage;
