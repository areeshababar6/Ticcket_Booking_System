import { useState } from "react";
import { Container, Row } from "reactstrap";


// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import SeatBooking from "./Seatbooking/pages/SeatBooking";
import SelectSeatType from "./Seatbooking/pages/SelectSeatType";
import Confirmation from "./Seatbooking/pages/Confirmation";
import TAB_OPTIONS from "./Seatbooking/constants/TabOptions";
export default function App() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});
  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }
  return (
    <Container className="container py-6" >
      <Row>
        <h1>Welcome to My Cinema ticket booking system</h1>
      </Row>
      {tab === TAB_OPTIONS.SEAT_TYPE ? (
        <SelectSeatType onNext={handleTabChange} />
      ) : null}
      {tab === TAB_OPTIONS.SEAT_SELECTION ? (
        <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
      ) : null}
      {tab === TAB_OPTIONS.CONFIRMATION ? (
        <Confirmation setTab={setTab} seatSelection={seatSelection} />
      ) : null}
    
    </Container>
  );
}


{/* <Route path="/Movies" element={<Book/> 
{tab === TAB_OPTIONS.SEAT_TYPE ? (
  <SelectSeatType onNext={handleTabChange} />
) : null}
{tab === TAB_OPTIONS.SEAT_SELECTION ? (
  <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
) : null}
{tab === TAB_OPTIONS.CONFIRMATION ? (
  <Confirmation setTab={setTab} seatSelection={seatSelection} />
) : null}  
}
   /> */}