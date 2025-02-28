import { useAppSelector } from "libraries/hooks/redux";
import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";
import PlusIcon from "../../../assets/PlusIcon";
import SearchIcon from "../../../assets/SearchIcon";
import { PATHS } from "../../../consts";
import { Permission } from "../../../libraries/permissionUtils/Permission";
import { usePermission } from "../../../libraries/permissionUtils/usePermission";
import { PatientsApi } from "../../../generated/apis/PatientsApi";
import { PatientDTO } from "../../../generated/models";
import AppHeader from "../../accessories/appHeader/AppHeader";
import Footer from "../../accessories/footer/Footer";
import LargeButton from "../../accessories/largeButton/LargeButton";
import PatientSearchItem from "../searchPatientActivity/PatientSearchItem";
import "./styles.scss";
import { IOwnProps, TActivityTransitionState } from "./types";
import { customConfiguration } from "libraries/apiUtils/configuration";

const PatientDashboardActivity: FC<IOwnProps> = ({
  newPatientRoute,
  searchPatientRoute,
}) => {
  const { t } = useTranslation();

  const { userCredentials } = useAppSelector((state) => ({
    userCredentials: state.main.authentication.data,
  }));

  const breadcrumbMap = {
    [t("nav.patients")]: PATHS.patients,
  };

  const canCreate = usePermission("patients.create");

  const [activityTransitionState, setActivityTransitionState] =
    useState<TActivityTransitionState>("IDLE");

  const [patients, setPatients] = useState<PatientDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const config = customConfiguration();
        const patientsApi = new PatientsApi(config);
        const response = await patientsApi.getPatients({ page, size }).toPromise();
        console.log(response);

        if (response && response.data) {
          setPatients(response.data);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [page, size]);

  const renderPatientTable = () => {
    if (loading) {
      return <div className="dashboard__patients__loading">{t("common.loading")}</div>;
    }

    if (patients.length === 0) {
      return <div className="dashboard__patients__empty">{t("dashboard.noPatients")}</div>;
    }

    return (
      <div className="dashboard__patients__list">
        {patients.map((patient) => (
          <PatientSearchItem
            key={patient.code}
            patient={patient}
            hideAdditionalInformation={false}
          />
        ))}
      </div>
    );
  };

  switch (activityTransitionState) {
    case "TO_NEW_PATIENT":
      return <Navigate to={newPatientRoute} />;
    case "TO_SEARCH_PATIENT":
      return <Navigate to={searchPatientRoute} />;
    default:
      return (
        <div data-cy="dashboard-activity" className="dashboard">
          <AppHeader
            userCredentials={userCredentials ? userCredentials : {}}
            breadcrumbMap={breadcrumbMap}
          />
          <div className="dashboard__background">
            <Permission require="patients.access">
              <div className="dashboard__greeter">
                <span className="user-welcome">
                  {t("dashboard.welcomename")}
                </span>
                {userCredentials?.username ? (
                  <strong className="user-name">
                    &nbsp;{userCredentials?.username}
                  </strong>
                ) : null}
              </div>
              <div className="dashboard__actions">
                {canCreate && (
                  <div className="dashboard__actions__button">
                    <LargeButton
                      handleClick={() =>
                        setActivityTransitionState("TO_NEW_PATIENT")
                      }
                    >
                      <div className="largeButton__inner">
                        <PlusIcon />
                        <div className="largeButton__inner__label">
                          {t("dashboard.newpatient")}
                        </div>
                      </div>
                    </LargeButton>
                  </div>
                )}
                <div className="dashboard__actions__button">
                  <LargeButton
                    handleClick={() =>
                      setActivityTransitionState("TO_SEARCH_PATIENT")
                    }
                  >
                    <div className="largeButton__inner">
                      <SearchIcon width="43" height="43" />
                      <div className="largeButton__inner__label">
                        {t("dashboard.searchpatients")}
                      </div>
                    </div>
                  </LargeButton>
                </div>
              </div>

              <div className="dashboard__patients">
                <h2 className="dashboard__patients__title">{'All patients'}</h2>
                {renderPatientTable()}
              </div>
            </Permission>
          </div>
          <Footer />
        </div>
      );
  }
};

export default PatientDashboardActivity;
