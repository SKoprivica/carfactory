import { Route, Switch, Redirect } from "react-router-dom";
import CreateVehicle from "../components/CreateVehicle";
import ParkingReview from "../components/ParkingReviw";
import VehicleReview from "../components/VehicleReviw";

export const RoutesPath = {
  VEHICLE_REVIEW: "/",
  VEHICLE_CREATE: "/vehicle/create",
  PARKING_REVIEW: "/parking/review",
}


const Routes = () => (
    <Switch>
      <Route path={RoutesPath.VEHICLE_CREATE} component={CreateVehicle} />
      <Route path={RoutesPath.PARKING_REVIEW} component={ParkingReview} />
      <Route path={RoutesPath.VEHICLE_REVIEW} component={VehicleReview} />
    </Switch>
  );
  
  export default Routes;