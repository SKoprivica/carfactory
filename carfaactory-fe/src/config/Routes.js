import { Route, Switch, Redirect } from "react-router-dom";
import CreateVehicle from "../components/vehicles/create/CreateVehicle";
import ParkingsReview from "../components/parking/ParkingsReviw";
import VehicleReview from "../components/vehicles/review/VehicleReviw";

export const RoutesPath = {
  VEHICLE_REVIEW: "/",
  VEHICLE_CREATE: "/vehicle/create",
  PARKING_REVIEW: "/parking/review",
}


const Routes = ({reload}) => (
    <Switch>
      <Route path={RoutesPath.VEHICLE_CREATE} key={RoutesPath.VEHICLE_CREATE} component={CreateVehicle} />
      <Route path={RoutesPath.PARKING_REVIEW} key={RoutesPath.PARKING_REVIEW} component={ParkingsReview} />
      <Route path={RoutesPath.VEHICLE_REVIEW} key={RoutesPath.VEHICLE_REVIEW} component={VehicleReview} />
    </Switch>
  );
  
  export default Routes;