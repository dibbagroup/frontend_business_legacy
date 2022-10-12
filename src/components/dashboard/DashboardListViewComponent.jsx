
  import Accordion from "react-bootstrap/Accordion";
  import { Button } from "react-bootstrap";

export const DashboardListViewComponent = (_) => {


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
