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
import ExpenseRequest from "../../APIRequest/ExpenseRequest";
import ExpenseTypeRequest from "../../APIRequest/ExpenseTypeRequest";

const ExpenseCreateUpdatePage = () => {
  let [ObjectID, SetObjectID] = useState(0);
  const { t } = useTranslation();
  const { ExpenseDetails } = useSelector((state) => state.Expense);
  const { ExpenseTypeDropDown } = useSelector((state) => state.ExpenseType);

  const navigate = useNavigate();

  useEffect(() => {
    ExpenseTypeRequest.ExpenseTypeDropDown();
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      ExpenseRequest.ExpenseDetails(id);
      SetObjectID(id);
    }
  }, []);

  /*
   * form validation schema
   */
  const validationSchema = yup.object().shape({
    ExpenseType: yup.string().required("Please Enter Expense Type"),
    ExpenseName: yup.string().required("Please Enter Expense Name"),
    ExpenseAmount: yup.string().required("Please Enter Expense Amount"),
  });

  /*
   * form methods
   */

  /**
   * Handle the form submission
   */
  const CreateUpdateExpense = (values) => {
    if (!ObjectID) {
      ExpenseRequest.ExpenseCreate({
        ExpenseType: values.ExpenseType,
        ExpenseName: values.ExpenseName,
        ExpenseAmount: values.ExpenseAmount,
        ExpenseNote: values.ExpenseNote,
      }).then((result) => {
        console.log(result);
        if (result) {
          navigate("/expense/expense-list");
        }
      });
    } else {
      ExpenseRequest.ExpenseUpdate(ObjectID, {
        ExpenseType: values.ExpenseType,
        ExpenseName: values.ExpenseName,
        ExpenseAmount: values.ExpenseAmount,
        ExpenseNote: values.ExpenseNote,
      }).then((result) => {
        if (result) {
          navigate("/expense/expense-list");
        }
      });
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Expense", path: "/expense/expense-list" },
          {
            label: !ObjectID ? "Create Expense" : "Update Expense",
            path: "/expense/expense-list",
            active: true,
          },
        ]}
        title={!ObjectID ? "Create Expense" : "Update Expense"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <VerticalForm
                    onSubmit={CreateUpdateExpense}
                    validationSchema={validationSchema}
                    defaultValues={ExpenseDetails}
                  >
                    <Row>
                      <Col>
                        <FormInput
                          name="ExpenseType"
                          label={t("Expense Type")}
                          placeholder={t("Enter Expense Type")}
                          containerClass={"mb-3"}
                          type="react-single-select"
                          options={ExpenseTypeDropDown}
                          defaultValue={ExpenseTypeDropDown.find(
                            (i) => i.value === ExpenseDetails?.ExpenseType,
                          )}
                        />
                        <FormInput
                          name="ExpenseName"
                          label={t("Expense Name")}
                          placeholder={t("Enter Expense Name")}
                          containerClass={"mb-3"}
                        />

                        <FormInput
                          name="ExpenseAmount"
                          label={t("Expense Amount")}
                          placeholder={t("Enter Expense Amount")}
                          containerClass={"mb-3"}
                          type="number"
                        />

                        <FormInput
                          name="ExpenseNote"
                          label={t("Expense Note")}
                          placeholder={t("Enter Expense Note")}
                          containerClass={"mb-3"}
                          type="simple-rich-edior"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col>
                        <Button type="submit" variant="success">
                          {!ObjectID ? "Add Expense" : "Update Expense"}
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

export default ExpenseCreateUpdatePage;
