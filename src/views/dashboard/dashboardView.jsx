import "./dashboardView.scss";
import { HeaderComponent } from "../../components/header/headerComponent";
import { Button } from "react-bootstrap";
import { DashboardListViewComponent } from "../../components/dashboard/DashboardListViewComponent";
import { DashboardChartViewComponent } from "../../components/dashboard/DashboardChartViewComponent";
import { useState } from "react";

export const DashboardView = (_) => {
  const [isChartView, setIsChartView] = useState(true);
  return (
    <main>
      <HeaderComponent />
      <div className="w-75 mx-auto pt-3 d-flex justify-content-end">
        <Button
          variant="outline-dark"
          onClick={() => {
            setIsChartView(!isChartView);
          }}
        >
          {
            isChartView ? "Ver como lista" : "Ver como gráficos"
          }
        </Button>
      </div>
      <section className="dashboard-hello text-center m-5 py-2">
        <h4 className="fw-light">Olá</h4>
        <h1>Enterprise name</h1>
      </section>

      {isChartView ? (
        <DashboardChartViewComponent />
      ) : (
        <DashboardListViewComponent />
      )}
    </main>
  );
};
