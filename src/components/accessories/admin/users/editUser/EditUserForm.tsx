import { Autocomplete } from "@mui/lab";
import {
  FormControl,
  FormHelperText,
  TextField as MuiTextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { ReactNode, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { UserDTO, UserGroupDTO } from "../../../../../generated";

import checkIcon from "../../../../../assets/check-icon.png";
import warningIcon from "../../../../../assets/warning-icon.png";
import Button from "../../../button/Button";
import ConfirmationDialog from "../../../confirmationDialog/ConfirmationDialog";
import InfoBox from "../../../infoBox/InfoBox";
import TextField from "../../../textField/TextField";

import CheckboxField from "components/accessories/checkboxField/CheckboxField";
import { PATHS } from "../../../../../consts";
import "./styles.scss";
import { userSchema } from "./validation";

interface IProps {
  initialValues: UserDTO;
  isLoading: boolean;
  hasSucceeded: boolean;
  hasFailed: boolean;
  error: any;
  groups: UserGroupDTO[];
  onSubmit: (userValue: UserDTO) => void;
}

export const EditUserForm = ({
  initialValues,
  isLoading,
  hasSucceeded,
  hasFailed,
  error,
  onSubmit,
  groups,
}: IProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openResetConfirmation, setOpenResetConfirmation] = useState(false);

  const handleFormSubmit = (values: UserDTO & { passwd2: string }) => {
    const { passwd2, ...userDTO } = values;
    if (userDTO.passwd === undefined) {
      userDTO.passwd = "";
    }

    onSubmit(userDTO);
  };

  const {
    handleSubmit,
    handleBlur,
    getFieldProps,
    isValid,
    dirty,
    errors,
    touched,
    values,
    setFieldTouched,
    setFieldValue,
  } = useFormik<UserDTO & { passwd2: string }>({
    initialValues: { ...initialValues, passwd: "", passwd2: "" },
    validationSchema: userSchema(t),
    onSubmit: handleFormSubmit,
  });

  const handleResetConfirmation = () => {
    setOpenResetConfirmation(false);
    navigate(-1);
  };

  const handleCheckboxChange = useCallback(
    (fieldName: string) => (value: boolean) => {
      setFieldValue(fieldName, value);
    },
    [setFieldValue]
  );

  return (
    <div className="editUserForm">
      <form className="editUserForm__form" onSubmit={handleSubmit}>
        <div className="row start-sm center-xs">
          <div className="editUserForm__item fullWidth">
            <FormControl variant="outlined" className="autocomplete">
              <Autocomplete
                id="userGroupName"
                options={groups}
                value={values.userGroupName}
                onBlur={() => setFieldTouched("userGroupName")}
                onChange={(_ev: any, value: UserGroupDTO | null) => {
                  setFieldValue("userGroupName", value);
                }}
                renderInput={(params) => (
                  <MuiTextField
                    {...params}
                    name="userGroupName"
                    variant="outlined"
                    size="small"
                    error={!!(touched.userGroupName && errors.userGroupName)}
                    fullWidth
                    label={t("user.group")}
                  />
                )}
                getOptionLabel={(option: UserGroupDTO) =>
                  option.code.toString() +
                  (option.desc ? ` - ${option.desc}` : "")
                }
                isOptionEqualToValue={(option, value) =>
                  option.code === value.code
                }
              />
              {touched.userGroupName && errors.userGroupName && (
                <FormHelperText error>
                  {
                    (errors.userGroupName?.code ||
                      errors.userGroupName) as ReactNode
                  }
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="editUserForm__item halfWidth">
            <TextField
              field={getFieldProps("passwd")}
              theme="regular"
              label={t("user.password")}
              isValid={!!touched.passwd && !!errors.passwd}
              errorText={(touched.passwd && errors.passwd) || ""}
              onBlur={handleBlur}
              type="password"
              // this below prevents from saving the password on the computer
              InputProps={{ autoComplete: "one-time-code" }}
            />
          </div>
          <div className="editUserForm__item halfWidth">
            <TextField
              field={getFieldProps("passwd2")}
              theme="regular"
              label={t("user.passwordRetype")}
              isValid={!!touched.passwd2 && !!errors.passwd2}
              errorText={(touched.passwd2 && errors.passwd2) || ""}
              onBlur={handleBlur}
              type="password"
              // this below prevents from saving the password on the computer
              InputProps={{ autoComplete: "one-time-code" }}
            />
          </div>
          <div className="editUserForm__item fullWidth">
            <TextField
              multiline
              rows={3}
              field={getFieldProps("desc")}
              theme="regular"
              label={t("user.description")}
              isValid={!!touched.desc && !!errors.desc}
              errorText={(touched.desc && errors.desc) || ""}
              onBlur={handleBlur}
            />
          </div>
          <div className="editUserForm__item fullWidth">
            <CheckboxField
              fieldName={"deleted"}
              checked={!!values.deleted}
              label={t("common.deleted")}
              onChange={handleCheckboxChange("deleted")}
            />
          </div>
        </div>

        <div className="editUserForm__item fullWidth">
          {hasFailed && (
            <div className="info-box-container">
              <InfoBox
                type="error"
                message={error?.message ?? t("common.somethingwrong")}
              />
            </div>
          )}
        </div>
        <div className="editUserForm__buttonSet">
          <div className="submit_button">
            <Button
              type="submit"
              variant="contained"
              disabled={!!isLoading || !isValid || !dirty}
            >
              {t("common.save")}
            </Button>
          </div>
          <div className="reset_button">
            <Button
              dataCy="cancel-form"
              type="reset"
              variant="text"
              disabled={isLoading}
              onClick={() => setOpenResetConfirmation(true)}
            >
              {t("common.cancel")}
            </Button>
          </div>
        </div>
      </form>
      <ConfirmationDialog
        isOpen={openResetConfirmation}
        title={t("common.cancel")}
        info={t("common.resetform")}
        icon={warningIcon}
        primaryButtonLabel={t("common.ok")}
        secondaryButtonLabel={t("common.discard")}
        handlePrimaryButtonClick={handleResetConfirmation}
        handleSecondaryButtonClick={() => setOpenResetConfirmation(false)}
      />
      <ConfirmationDialog
        isOpen={hasSucceeded}
        title={t("user.updatedSuccessTitle")}
        icon={checkIcon}
        info={t("user.updatedSuccessMessage")}
        primaryButtonLabel="Ok"
        handlePrimaryButtonClick={() => {
          navigate(PATHS.admin_users);
        }}
        handleSecondaryButtonClick={() => ({})}
      />
    </div>
  );
};
