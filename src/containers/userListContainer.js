import { connect } from "react-redux";
import { UsersList,usersDataSelectore} from "../components/UsersList";


const mapStateToProps = state=>({
    users: usersDataSelectore(state),
})

const mapDispatchToProps = {};


export default connect(mapStateToProps,mapDispatchToProps)(UsersList)