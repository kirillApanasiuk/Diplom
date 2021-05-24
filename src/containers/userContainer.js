import { connect } from "react-redux";
import { User } from "../components/User";
import { setUserStatus } from "../redux/actions/usersActions";
import { userSelector } from "../selectors/userSelector";

const mapStateToProps = userSelector;

const mapDispatchToProps = {
    onChangeUserStatus: setUserStatus,
}

export default connect(mapStateToProps,mapDispatchToProps)(User)