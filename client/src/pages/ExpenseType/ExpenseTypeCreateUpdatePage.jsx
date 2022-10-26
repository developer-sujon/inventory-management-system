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
import ExpenseTypeRequest from "../../APIRequest/ExpenseTypeRequest";

const ExpenseTypeCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { ExpenseTypeDetails } = useSelector((state) => state.ExpenseType);

  const navigate = useNavigate();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      ExpenseTypeRequest.ExpenseTypeDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    ExpenseTypeName: yup.string().required("Please Enter Expense Type Name"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateExpenseType = (values) => {
    if (!ObjectID) {
      ExpenseTypeRequest.ExpenseTypeCreate({
        ExpenseTypeName: values.ExpenseTypeName,
        ExpenseTypeNote: values.ExpenseTypeNote,
        ExpenseTypeStatus: values.ExpenseTypeStatus,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/expense-type/expense-type-list");
        }
      });
    } else {
      ExpenseTypeRequest.ExpenseTypeUpdate(ObjectID, {
        ExpenseTypeName: values.ExpenseTypeName,
        ExpenseTypeNote: values.ExpenseTypeNote,
        ExpenseTypeStatus: values.ExpenseTypeStatus,
      }).then((result) => {
        if (result) {
          navigate("/expense-type/expense-type-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Expense Type", path: "/expense-type/expense-type-list" },
          {
            label: !ObjectID ? "Create Expense Type" : "Update Expense Type",
            path: "/expense-type/expense-type-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Expense Type" : "Update Expense Type"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateExpenseType}
                    validationSchema={validationSchema}
                    defaultValues={ExpenseTypeDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="ExpenseTypeName"
                          label={t("Expense Type Name")}
                          placeholder={t("Enter Expense Type Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="ExpenseTypeNote"
                          label={t("Expense Type Note")}
                          placeholder={t("Enter ExpenseType Note")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />

                        <FormInput
                          name="ExpenseTypeStatus"
                          label={t("Expense Type Status")}
                          placeholder={t("Enter Expense Type Status")}
                          containerClass={"mb-3"}
                          type="checkbox"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? 'Add Expense Type': 'Update Expense Type'}
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

export default ExpenseTypeCreateUpdatePage;
