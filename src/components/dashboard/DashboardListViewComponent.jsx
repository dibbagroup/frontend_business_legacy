import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  import Accordion from "react-bootstrap/Accordion";
  import { Button, Col, Row } from "react-bootstrap";

export const DashboardListViewComponent = (_) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const currentDate = new Date();
  const eventData = [
    {
      name: "Evento",
      date: currentDate.getDate,
    },

    {
      name: "Evento",
      date: currentDate.getDate,
    },

    {
      name: "Evento",
      date: currentDate.getDate,
    },

    {
      name: "Evento",
      date: currentDate.getDate,
    },
  ];
  return (
    <div>
      <AreaChart width={window.innerWidth} height={200} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      <div className="dashboard-content w-75 mx-auto mb-5">
        <div>
          <div className="mt-5"></div>
          <div className="d-flex justify-content-between">
            <h2>Meus eventos</h2>
            <Button variant="outline-dark">Novo evento</Button>
          </div>
          <div className="py-2"></div>
          <Accordion>
            {eventData.map((e, i) => (
              <Accordion.Item eventKey={`${i}`}>
                <Accordion.Header>
                  {e.name} {i}
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
